import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn:'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor (private router : Router, private authService : AuthService) { }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl("/login");
    }
    return this.authService.isLoggedIn();
  }
}
