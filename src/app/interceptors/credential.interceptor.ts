import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {

  constructor(
    private tokenService :TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtHeaderToken = this.tokenService.getJwtToken();
    const req = request.clone({
      setHeaders: {
        Authorization: "Bearer " + jwtHeaderToken
      }
    });
    return next.handle(req);
  }
}
