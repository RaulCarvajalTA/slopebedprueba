import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(
  ) {}

  onLogin(){
    this._authService.login(
      {
        user: '',
        password: ''
      }
    ).subscribe(
      res => console.log(res)
    )
  }

}
