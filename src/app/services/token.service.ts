import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setTokenStorage(token: string){
    localStorage.setItem('auth_token', token);
  }

  getJwtToken(){
    return localStorage.getItem('auth_token');
  }

  destroyToken(){
    localStorage.removeItem('auth_token');
  }

  loggedIn() {
    const token = this.getJwtToken();
    if(token){
      return true;
    } else {
      return false;
    }
  }

}
