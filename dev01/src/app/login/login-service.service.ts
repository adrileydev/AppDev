import { Router } from '@angular/router';
import { Usuario } from './../Entidades/Usuario';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class LoginServiceService {
  MostarMenu = new EventEmitter<boolean>();
usuario = new Usuario();
Autenticado: boolean;
 constructor(private router: Router) {
 }
  FazerLogin(usuario) {

     if (usuario.Nome === 'adriley' && usuario.Pass === '123') {
         usuario.Autenticado = true;
         this.Autenticado = usuario.Autenticado = true;
         this.MostarMenu.emit(true);
         this.router.navigate(['/']);
           console.log( this.usuarioAutenticado());
     } else {
       this.MostarMenu.emit(false);
         this.Autenticado = usuario.Autenticado = false;
         console.log( this.usuarioAutenticado());
     }

  }
    usuarioAutenticado(){
      return this.Autenticado;
    }
}
