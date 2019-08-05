import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { RootService } from '../service/root.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private rootService: RootService) {}
  canActivate() {
    if (localStorage.getItem('token')) return true;
    this.rootService.requiredLogin = true;
    this.router.navigate(['home'])
    return false;
  }
  
}
