import { Router } from '@angular/router';
import { Usuario } from './../Entidades/Usuario';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class LoginServiceService {
  MostarMenu = new EventEmitter<boolean>();

 constructor(private router: Router) {
 }
  FazerLogin(usuario: Usuario) {

     if (usuario.Nome === 'adriley' && usuario.Pass === '123') {
         usuario.Autenticado = true;
         this.MostarMenu.emit(true);
         this.router.navigate(['/']);
     } else {
       this.MostarMenu.emit(false);
         usuario.Autenticado = false;
     }
  }
}
