import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BLEDevice } from 'src/app/common/interfaces/device.interface';
import { ActualDataService } from 'src/app/common/services/actual-data.service';
import { BleService } from 'src/app/common/services/ble.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent  implements OnInit, OnDestroy {

  angle: number = 0

  isToastOpen = false;
  messageToast: string = ''

  actualDevice$ =this._actualDataService.actualDevice$;
  private actualDeviceSubsciption!: Subscription;
  deviceConnected: BLEDevice | null = null;

  constructor(
    private _actualDataService: ActualDataService,
    private _bleService: BleService
  ) {
  }

  /**
   * D for Down
   * U for Up
   * S for Stop when user release the button
   * H for set 0deg on the bed.
   */

  ngOnInit() {
    this.actualDeviceSubsciption = this.actualDevice$.subscribe(
      actualDevice => {
        this.deviceConnected = actualDevice;
      }
    )
  }

  ngOnDestroy(): void {
    this.actualDeviceSubsciption.unsubscribe();
  }

  upButton(){//U Letter
    if(this.deviceConnected){
      this.sendData('U')
    }else{
      this.isToastOpen = true;
      this.messageToast = 'No device connected'
    }
  }

  downButton(){//D Letter
    if(this.deviceConnected){
      this.sendData('D')
    }else{
      this.isToastOpen = true;
      this.messageToast = 'No device connected'
    }
  }

  zeroButton(){//H Letter
    if(this.deviceConnected){
      this.sendData('H')
    }else{
      this.isToastOpen = true;
      this.messageToast = 'No device connected'
    }
  }

  onReleaseControlButton(){//S Letter
    if(this.deviceConnected){
      this.sendData('S')
    }
  }

  showToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  private sendData(letter: string){
    this._bleService.writeData(this.deviceConnected!, letter)
  }

}
