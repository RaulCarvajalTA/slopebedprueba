import { Injectable } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BLEDevice } from '../interfaces/device.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActualDataService } from './actual-data.service';

@Injectable({
  providedIn: 'root'
})
export class BleService {

  constructor(
    private ble: BLE,
    private _actualDataService: ActualDataService
  ) { }


  startScanDevices(){
    console.log('BLE - Start Scanning')
    return this.ble.startScan([]);
  }

  stopScanDevices(){
    console.log('BLE - Stop Scanning')
    return this.ble.stopScan();
  }

  connectDevice(device: BLEDevice){
    console.log('BLE - Connect')
    return this.ble.connect(device.id).subscribe(
      peripheralData => {
        this._actualDataService.setActualDevice(peripheralData);
      }
    );
  }

  disconnectDevice(device: BLEDevice){
    console.log('BLE - Disconnect')
    return this.ble.disconnect(device.id).then(() => {
      this._actualDataService.setActualDevice(null);
    });
  }

}
