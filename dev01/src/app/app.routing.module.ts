import { ErrosComponent } from './curso/erros/erros.component';
import { DetalheCursoComponent } from './curso/detalhe-curso/detalhe-curso.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth-guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
   {path: '', canActivate: [AuthGuard], component: HomeComponent }

 /* {path: 'cursos', component: CursoComponent },
  {path: 'curso/:id', component: DetalheCursoComponent },
  {path: '', component: HomeComponent },
  {path: 'erro', component: ErrosComponent}*/
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export  class AppRoutingModule{ }
