import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicoCursoService } from './../servicos/servico-curso.service';
import { ErrosComponent } from './erros/erros.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursoComponent } from './curso.component';
import { NgModule } from '@angular/core';
import { CursoRoutingModule } from './curso.routing.module';
import { CursoformComponent } from './cursoform/cursoform.component';

@NgModule({
  declarations: [CursoComponent, DetalheCursoComponent, ErrosComponent, CursoformComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
    //RouterModule
  ],
  exports: [],
  providers: [ServicoCursoService],
})
export class CursosModule {}
