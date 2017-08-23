import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
const ROUTES: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'curso', component: CursoComponent },
  {path: '', component: HomeComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
