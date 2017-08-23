import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'curso', component: CursoComponent },
  {path: 'curso/:id', component: DetalheCursoComponent },
  {path: '', component: HomeComponent }
];


@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export  class AppRoutingModule{}
