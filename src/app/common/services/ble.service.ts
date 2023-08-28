import { Injectable } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BLEDevice } from '../interfaces/device.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BleService {

  constructor(
    private ble: BLE
  ) { }

  actualDevice$: BehaviorSubject<BLEDevice> = new BehaviorSubject<BLEDevice>(
    {
      id: '',
      name: 'none',
      advertising : {},
      rssi: 1
    } 
  );

  noneDevice: BLEDevice = {
      id: '',
      name: 'none',
      advertising : {},
      rssi: 1
  };

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
    /*return this.ble.connect(device.id).subscribe(
      peripheralData => {
        //this.actualDevice$.next(peripheralData);
      }
    );*/
  }

  disconnectDevice(device: BLEDevice){
    console.log('BLE - Disconnect')
    /*return this.ble.disconnect(device.id).then(() => {
      //this.actualDevice$.next(null);
    });*/
  }

  setDeviceSelected(device: BLEDevice) {
    this.actualDevice$.next(device);
  }
  
  getDeviceSelected(): Observable<BLEDevice> {
    return this.actualDevice$.asObservable();
  }
}
