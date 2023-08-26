import { Injectable } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BLEDevice } from '../interfaces/device.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BleService {

  constructor(
    private ble: BLE
  ) { 
    
  }

  actualDevice$: BehaviorSubject<BLEDevice | null> = new BehaviorSubject<BLEDevice | null>(null);

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
    this.actualDevice$.next(device);
    /*return this.ble.connect(device.id).subscribe(
      peripheralData => {
        //this.actualDevice$.next(peripheralData);
      }
    );*/
  }

  disconnectDevice(device: BLEDevice){
    console.log('BLE - Disconnect')
    this.actualDevice$.next(null);
    /*return this.ble.disconnect(device.id).then(() => {
      //this.actualDevice$.next(null);
    });*/
  }
}
