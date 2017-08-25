import { AlunoServicesService } from './aluno-services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos: any[]= [];
  constructor(private alunoServicesService: AlunoServicesService) { }

  ngOnInit() {
    this.alunos = this.alunoServicesService.getAlunos();
  }


}
