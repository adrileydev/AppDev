import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header/header.component';
import { ServicoCursoService } from './servicos/servico-curso.service';
import { AppRoutingModule } from "./app.routing.module";
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
//import { routing } from './rota';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    LoginComponent,
    HeaderComponent,
    DetalheCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicoCursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
