import { Injectable } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BLEDevice, Characteristic } from '../interfaces/device.interface';
import { BehaviorSubject, Observable, Subscription, catchError } from 'rxjs';
import { ActualDataService } from './actual-data.service';

@Injectable({
  providedIn: 'root'
})
export class BleService {

  constructor(
    private ble: BLE,
    private _actualDataService: ActualDataService
  ) {
    this.actualCharSubsciption = this.actualCharacteristiscs$.subscribe(
      characteristiscs => this.actualCharacteristiscs = characteristiscs
    )
  }

  actualCharacteristiscs$ =this._actualDataService.actualCharacteristics$;
  private actualCharSubsciption!: Subscription;
  actualCharacteristiscs: Characteristic[] = [];

  startScanDevices(){
    console.log('BLE - Start Scanning')
    return this.ble.startScan([]);
  }

  stopScanDevices(){
    console.log('BLE - Stop Scanning')
    return this.ble.stopScan();
  }

  connectDevice(device: BLEDevice){
    console.log(`BLE - Connect to ${device.id}`)
    return this.ble.connect(device.id)
    .pipe(
      catchError( err => {
        this._actualDataService.setActualDevice(null);
        this._actualDataService.setActualCharacteristic([])
        return err;
      })
    )
    .subscribe(
      peripheralData => {
        this._actualDataService.setActualDevice(peripheralData);
        this._actualDataService.setActualCharacteristic(peripheralData.characteristics);
      }
    );
  }

  disconnectDevice(device: BLEDevice){
    console.log(`BLE - Disconnect from ${device.id}`)
    return this.ble.disconnect(device.id).then(() => {
      this._actualDataService.setActualDevice(null);
    });
  }

  writeData(device: BLEDevice, data: string){
    console.log(`BLE - Writting ${data} on ${device.id}`);
    
    let rawData = btoa(data);
    let serviceUUID = this.actualCharacteristiscs[5].service;
    let characteristicUUID =this.actualCharacteristiscs[5].characteristic;

    console.log("Printing - ", rawData);
    console.log("Service UUID - ", serviceUUID);
    console.log("Char UUID - ", characteristicUUID);

    this.ble.write(device.id, serviceUUID, characteristicUUID, this.stringToArrayBuffer(data))
      .then(
        () => console.log("BLE - Escrito")
      )
      .catch(
        error => console.log("BLE - Nada escrito ERROR ", JSON.stringify(error))
      )
  }


  private stringToArrayBuffer(input: string): ArrayBuffer {
    const buffer = new ArrayBuffer(input.length);
    const view = new Uint8Array(buffer);
  
    for (let i = 0; i < input.length; i++) {
      view[i] = input.charCodeAt(i);
    }
  
    return buffer;
  }

}
