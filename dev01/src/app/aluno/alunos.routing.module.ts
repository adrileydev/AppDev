import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoComponent } from './aluno.component';
import { RouterModule } from '@angular/router';

import { NgModule, Component } from '@angular/core';
const AlunosRotas = [
       {path: 'alunos', component : AlunoComponent, children: [
       {path: 'novo', component   : AlunoFormComponent},
       {path: ':id', component : AlunoDetalhesComponent},
       {path: ':id/editar', component : AlunoFormComponent}
       ]}
];
@NgModule({
   imports: [RouterModule.forChild(AlunosRotas)],
   exports: [RouterModule]
})
export class AlunosRoutingModule {}
