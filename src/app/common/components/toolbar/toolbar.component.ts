import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { ActualDataService } from '../../services/actual-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit, OnDestroy {

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _actualData: ActualDataService
  ) { 
    this.getActualDeviceName();
  }

  @Input() title: string = '';
  name: string = 'x'
  deviceConectedName: string= '';

  actualDevice$ =this._actualData.actualDevice$;
  private actualDeviceSubsciption!: Subscription;
  ngOnInit() {
    this.getName();
  }

  ngOnDestroy(): void {
    this.actualDeviceSubsciption.unsubscribe();
  }

  getActualDeviceName(){
    this.actualDeviceSubsciption = this.actualDevice$.subscribe(
      actualDevice => {
        this.deviceConectedName = actualDevice?(actualDevice.name?actualDevice.name:'Unnamed'):'None';
      }
    )
  }

  getName(){
    let user:User = this._tokenService.getUser();
    this.name = user.username
  }

  logut(){
    this._authService.logout();
  }

}
