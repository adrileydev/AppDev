import { Usuario } from './../Entidades/Usuario';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private usuario = new Usuario('', '', true);
  constructor(private loginServiceService: LoginServiceService ) { }


  ngOnInit() {

  }

  Logar(usuario) {
    console.log(usuario);
  }

}
