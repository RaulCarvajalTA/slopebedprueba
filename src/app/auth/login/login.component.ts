import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/common/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  loginForm!: FormGroup;
  isAlertOpen:boolean = false;
  public alertButtons = ['OK'];
  public messageError: string = '';
  public logginIn: boolean = false;

  ngOnInit() {
    this.initForm();

    /*this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.INTERNET).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.INTERNET)
    );
    
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.INTERNET, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);*/
  }

  initForm(){
    this.loginForm = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]] 
    })
  }

  onLogin(){
    this.logginIn = true;
    this._authService
    .login(this.loginForm.value)
    //TODO:REMOVE OMIT VALIDATION
    /*.pipe(
      catchError(
        error => {
          console.log("ERROR DE LOGIN")
          console.log(error.message)
          switch(error.status){
            case 401:
              this.messageError = 'Error 401 - Incorrect Password.'
              break;
            case 404:
              this.messageError = 'Error 404 - User not found.'
              break;
            case 500:
              this.messageError = 'Error 500 - Server error.'
              break;
          }
          this.setOpen(true);
          return error;
        }
      )
    ).subscribe({
      next: () =>{
        
        this._router.navigateByUrl('app');
      },
      error: () => {
        console.log("ERROR DE LOGIN en SUBSCRIBE")
      }
    })*/
  }

  setOpen(status: boolean){
    this.isAlertOpen = status;
    if(!status){
      //this.loginForm.reset();
      this.logginIn = false;
    }
  }

}
