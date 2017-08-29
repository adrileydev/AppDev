import { Aluno } from './../../Entidades/Alunos';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoServicesService } from '../aluno-services.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html'
})
export class AlunoFormComponent implements OnInit {
   aluno: any;
   inscricao: Subscription;
  constructor( private route: ActivatedRoute,
               private alunoServicesService: AlunoServicesService ) {
   }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this.alunoServicesService.getAluno(id);
      }
    );
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
   this.inscricao.unsubscribe();
  }
  GravarAluno(v: Aluno) {
  }
}
