import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicoCursoService } from './../servicos/servico-curso.service';
import { ErrosComponent } from './erros/erros.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursoComponent } from './curso.component';
import { NgModule } from '@angular/core';
import { CursoRoutingModule } from './curso.routing.module';

@NgModule({
  declarations: [CursoComponent, DetalheCursoComponent, ErrosComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
    //RouterModule
  ],
  exports: [],
  providers: [ServicoCursoService],
})
export class CursosModule {}
