import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ServicoCursoService } from './servicos/servico-curso.service';
import { AppRoutingModule } from './app.routing.module';
import { DetalheCursoComponent } from './curso/detalhe-curso/detalhe-curso.component';
import { ErrosComponent } from './curso/erros/erros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    LoginComponent,
    HeaderComponent,
    DetalheCursoComponent,
    ErrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicoCursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
