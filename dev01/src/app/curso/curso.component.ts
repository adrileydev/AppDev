import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicoCursoService } from '../servicos/servico-curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  pagina: number;
  cursos: any[];
  inscricao: Subscription;
  constructor(private servicoCursoService: ServicoCursoService, private route: ActivatedRoute ) { }

  ngOnInit() {
   this.cursos = this.servicoCursoService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.pagina = queryParam['pagina'];
      }
    );
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
        this.inscricao.unsubscribe();
  }

}
