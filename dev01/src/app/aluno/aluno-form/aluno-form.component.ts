import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoCursoService } from '../../servicos/servico-curso.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number;
  curso: any;
  inscricao: Subscription;
  constructor(private route: ActivatedRoute,
             private servicoCursoService: ServicoCursoService,
             private router: Router ) {

  }

  ngOnInit() {
    this.inscricao =  this.route.params.subscribe(
      (params: any) => {
    this.id = params['id'];
    this.curso = this.servicoCursoService.getCurso(this.id = params['id']);

     if (this.curso == null){
        this.router.navigate(['/erro']);
     }
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();

  }

}
