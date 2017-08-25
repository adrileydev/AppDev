import { CursoComponent } from './curso.component';

import { RouterModule } from '@angular/router';

import { NgModule, Component } from '@angular/core';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { ErrosComponent } from './erros/erros.component';
const cursosRouting = [
  {path: 'cursos', component: CursoComponent },
  {path: 'curso/:id', component: DetalheCursoComponent },
  {path: 'erro', component: ErrosComponent}
];
@NgModule({
   imports: [RouterModule.forChild(cursosRouting)],
   exports: [RouterModule]
})
export class CursoRoutingModule {}
