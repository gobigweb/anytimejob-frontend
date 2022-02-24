import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStateService {

  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  authState = this.loggedIn.asObservable();

  constructor(
    public tokenService: TokenService
  ) { }

  changeAuthState(value: boolean) {
    this.loggedIn.next(value);
  }
}
