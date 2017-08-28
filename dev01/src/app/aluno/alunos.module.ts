import { FormsModule } from '@angular/forms';
import { AlunosRoutingModule } from './alunos.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';


@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule],
  exports: [],
  declarations: [AlunoComponent, AlunoFormComponent, AlunoDetalhesComponent]
})
export class AlunosModule { }
