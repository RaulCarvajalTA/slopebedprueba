import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from "typescript-cookie";
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string){
    //localStorage.setItem('token', token);
    setCookie('token', token, { expires: 365, path: '/'});
  }

  saveUser(user: User){
    //localStorage.setItem('token', token);
    setCookie('user', JSON.stringify(user), { expires: 365, path: '/'});
  }

  getToken(){
    //const token = localStorage.getItem('token');
    const token = getCookie('token');
    return token;
  }

  getUser(){
    //const token = localStorage.getItem('token');
    const user = JSON.parse(getCookie('user')!);
    return user;
  }

  removeToken(){
    //localStorage.removeItem('token');
    removeCookie('token');
  }

  removeUser(){
    //localStorage.removeItem('token');
    removeCookie('user');
  }
}
