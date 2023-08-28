import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/interfaces/user.interface';
import { BleService } from 'src/app/common/services/ble.service';
import { TokenService } from 'src/app/common/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(
    private _tokenService: TokenService
  ) { }

  name: string = 'Miguel'

  ngOnInit() {
    this.getName();
  }

  getName(){
    let user:User = this._tokenService.getUser();

    this.name = user.username
  }


}
