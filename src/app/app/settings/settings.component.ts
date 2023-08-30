import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BLEDevice } from 'src/app/common/interfaces/device.interface';
import { ActualDataService } from 'src/app/common/services/actual-data.service';
import { BleService } from 'src/app/common/services/ble.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit, OnDestroy {

  constructor(
    private ngZone: NgZone,
    private _bleService: BleService,
    private _actualData: ActualDataService
  ) { }

  devices: BLEDevice[] = [];
  scanning: boolean = false;
  
  actualDevice$ = this._actualData.actualDevice$;
  actualDevice: BLEDevice | null = null;
  private actualDeviceSubsciption!: Subscription;

  ngOnInit() {
    this.getActualDevice();
  }

  ngOnDestroy(): void {
    this.actualDeviceSubsciption.unsubscribe();
  }

  getActualDevice(){
    this.actualDeviceSubsciption = this._actualData.actualDevice$
    .subscribe(
      device => this.actualDevice = device
    )
  }

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
    if(!this.actualDevice){
      this.stopScan();
      this._bleService.connectDevice(device);
    }
  }

  disconnectTo(device: BLEDevice){
    this.actualDevice = null;
    this._bleService.disconnectDevice(device);
  }

  connectOrDisconnect(device: BLEDevice){
    if(this.actualDevice){
      this.disconnectTo(device);
    }else{
      this.connectTo(device);
    }
  }

}
