import { Component, NgZone, OnInit } from '@angular/core';
import { BLEDevice } from 'src/app/common/interfaces/device.interface';
import { ActualDataService } from 'src/app/common/services/actual-data.service';
import { BleService } from 'src/app/common/services/ble.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {

  constructor(
    private ngZone: NgZone,
    private _bleService: BleService,
    private _actualData: ActualDataService
  ) { }

  devices: BLEDevice[] = [];
  scanning: boolean = false;
  deviceConected: BLEDevice | undefined = undefined;

  ngOnInit() {}

  startScan(){
    this.scanning = true;
    this.devices = [];
    this._bleService.startScanDevices().subscribe(
      device => {
        if(device.name){
          if(device.name.includes("SLOPEBED")){
            this.onDeviceDiscovered(device)
          }
        }
      }
    );
  }

  onDeviceDiscovered(device:any){
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }

  stopScan(){
    this.scanning = false;
    this._bleService.stopScanDevices().then(
      response => {
        console.log(response)
      }
    )
  }

  connectTo(device: BLEDevice){
    if(!this.deviceConected){
      this.stopScan();
      this.deviceConected = device;
      this._bleService.connectDevice(device);
    }
  }

  disconnectTo(device: BLEDevice){
    this.deviceConected = undefined;
    this._bleService.disconnectDevice(device);
  }

  connectOrDisconnect(device: BLEDevice){
    if(this.deviceConected){
      this.disconnectTo(device);
    }else{
      this.connectTo(device);
    }
  }

  counter: number = 0;
  publish(){
    this.counter ++
    this._actualData.setActualDevice(
      {
        id: '',
        name: 'PRUEBA '+this.counter,
        advertising : {},
        rssi: 1
      }
    )
  }

}
