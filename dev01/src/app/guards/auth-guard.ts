import { Usuario } from './../Entidades/Usuario';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginServiceService } from '../login/login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginServiceService: LoginServiceService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state:  RouterStateSnapshot
  ): Observable <boolean> | boolean {
    if (this.loginServiceService.usuarioAutenticado()){

    return true;
    }

  this.router.navigate(['/login']);
    return false;


  }

}
