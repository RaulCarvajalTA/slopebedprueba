import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { BleService } from '../../services/ble.service';
import { BLEDevice } from '../../interfaces/device.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _bleService: BleService
  ) { }

  @Input() title: string = '';
  name: string = 'x'
  deviceConnected$ = this._bleService.actualDevice$;

  ngOnInit() {
    this.getName();
  }

  getName(){
    let user:User = this._tokenService.getUser();

    this.name = user.username
  }

  logut(){
    this._authService.logout();
  }

}
