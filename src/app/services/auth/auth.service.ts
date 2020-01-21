import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

import { BackendAPIService } from '../backendAPI/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: BackendAPIService,
    private router: Router) { }

  login(username: string, password: string) {
    this.api.login(username, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id,
          res.headers.get('x-access-token'),
          res.headers.get('x-refresh-token'));
        console.log(res);
      })
    );
  }

  logout() {
    this.removeSession();
  }

  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('access-token');
    localStorage.setremoveItemItem('refresh-token');
  }
}
