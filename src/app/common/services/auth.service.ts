import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  url: string = environment.api;

  login(data:any){
    this._router.navigateByUrl('app')
    return this._http.post<any>(`${this.url}login`, data);
  }
}
