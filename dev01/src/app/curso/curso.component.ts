import { Component, OnInit } from '@angular/core';
import { ServicoCursoService } from '../servicos/servico-curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos: any[];
  constructor(private servicoCursoService: ServicoCursoService ) { }

  ngOnInit() {
    this.cursos = this.servicoCursoService.getCursos();

  }

}
