import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoComponent } from './aluno.component';
import { RouterModule } from '@angular/router';

import { NgModule, Component } from '@angular/core';
import { AuthGuard } from '../guards/auth-guard';
const AlunosRotas = [
       {path: 'alunos',    canActivate: [AuthGuard], component : AlunoComponent, children: [
       {path: 'novo',       canActivate: [AuthGuard], component : AlunoFormComponent},
       {path: ':id',        canActivate: [AuthGuard], component : AlunoDetalhesComponent},
       {path: ':id/editar', canActivate: [AuthGuard], component : AlunoFormComponent}
       ]}
];
@NgModule({
   imports: [RouterModule.forChild(AlunosRotas)],
   exports: [RouterModule]
})
export class AlunosRoutingModule {}
