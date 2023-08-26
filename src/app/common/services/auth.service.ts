import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';
import { LoginReq } from '../interfaces/login-req.interface';
import { LoginRes } from '../interfaces/login-res.interface';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _tokenService: TokenService
  ) { }

  url: string = environment.api;
  user$ = new BehaviorSubject<User | null>(null);

  userTest: LoginRes = {
    user: {
        id: 6,
        username: "rcarvajal",
        password: "$2b$10$0fOnmvrf9skwAPzf4xgvKu09SJCXDPRS3C66z5ku08J0Ybw4MRKBO",
        email: "rcarvajal@tecnoap.com",
        phone: "8126812367",
        createdAt: "2023-03-30T23:10:32.000Z",
        updatedAt: "2023-04-13T22:44:39.000Z"
    },
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo2LCJ1c2VybmFtZSI6InJjYXJ2YWphbCIsInBhc3N3b3JkIjoiJDJiJDEwJDBmT25tdnJmOXNrd0FQemY0eGd2S3UwOVNKQ1hEUFJTM0M2Nno1a3UwOEowWWJ3NE1SS0JPIiwiZW1haWwiOiJyY2FydmFqYWxAdGVjbm9hcC5jb20iLCJwaG9uZSI6IjgxMjY4MTIzNjciLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTMwVDIzOjEwOjMyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTEzVDIyOjQ0OjM5LjAwMFoifSwiaWF0IjoxNjkyOTE5NzIxfQ.98uIqGC9CNNanIfSmCqEqJYRiR2YsaHhQJajHagybVE"
  }

  login(data:LoginReq){
    this._tokenService.saveToken(this.userTest.token);
    this._tokenService.saveUser(this.userTest.user);
    this.user$.next(this.userTest.user);
    this._router.navigateByUrl('app')
    /*return this._http.post<LoginRes>(`${this.url}login`, data)
    .pipe(
      tap(
        res => {
          this._tokenService.saveToken(res.token);
          this._tokenService.saveUser(res.user);
          this.user$.next(res.user);
          console.log(res);
        }
      )
    );*/
  }

  logout(){
    this._tokenService.removeToken();
    this._tokenService.removeUser();
    this._router.navigate(['/auth'])
  }
}
