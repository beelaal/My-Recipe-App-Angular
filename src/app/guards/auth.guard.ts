import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { reject } from 'q';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user = null;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    return new Promise(resolve => {
    const user = localStorage.getItem('isAuthorize');
    resolve(true);
    if (user) {
      // return true;
      resolve(true);
    } else {
      this.router.navigate(['/login']);
      // return false;
       reject(false);
    }

    });
  }
}

  // constructor(private authService: AuthService, private helper: JwtHelperService, private router: Router) { }


    // const user = JSON.parse( sessionStorage.getItem(environment.TOKEN_KEY));
    // console.log(user);
    // if (user['Authorize']) {
    //     return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
