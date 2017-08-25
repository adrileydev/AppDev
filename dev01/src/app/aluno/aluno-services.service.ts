import { Aluno } from './../Entidades/Alunos';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunoServicesService {
  private alunos: Array<Aluno>;

  constructor() { }
  getAlunos() {
    this.alunos = [
      new Aluno(1, 'Adriley', 'adriey@terra.com'),
      new Aluno(1, 'Ana luiza', 'Ana@terra.com'),
      new Aluno(1, 'Patricia', 'Patricia@terra.com'),
      new Aluno(1, 'Victor ', 'Victor@terra.com')
    ];
    return this.alunos;
  }
}
