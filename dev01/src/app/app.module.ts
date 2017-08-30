import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ServicoCursoService } from './servicos/servico-curso.service';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './curso/cursos.module';
import { AlunosModule } from './aluno/alunos.module';
import { AlunoServicesService } from './aluno/aluno-services.service';
import { LoginServiceService } from './login/login-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule
  ],
  providers: [ServicoCursoService, AlunoServicesService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
