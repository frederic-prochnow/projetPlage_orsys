import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConnectionTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('plageToken');
    if (token) {
      let cloneRequest = request.clone({
        headers: new HttpHeaders().set('Authorization', 'bearer ' + token),
      });
      return next.handle(cloneRequest);
    } else {
      return next.handle(request);
    }
  }
}

export const tokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ConnectionTokenInterceptor,
  multi: true,
};