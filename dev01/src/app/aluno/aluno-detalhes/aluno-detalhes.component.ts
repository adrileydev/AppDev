import { AlunoServicesService } from './../aluno-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {
  aluno: any;
   inscricao: Subscription;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private alunoServicesService: AlunoServicesService ) {
   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoServicesService.getAluno(id);
        if (this.aluno === null) {
          this.aluno = { }
        }
      }
    );
  }
  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
   this.inscricao.unsubscribe();
  }

}
