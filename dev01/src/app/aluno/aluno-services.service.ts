import { Aluno } from './../Entidades/Alunos';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunoServicesService {
  private alunos: Array<Aluno>;

  constructor() { }
  getAlunos() {
    this.alunos = [
      new Aluno(1, 'Adriley', 'adriey@terra.com'),
      new Aluno(2, 'Ana luiza', 'Ana@terra.com'),
      new Aluno(3, 'Patricia', 'Patricia@terra.com'),
      new Aluno(4, 'Victor ', 'Victor@terra.com')
    ];
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    for(let i = 0; i < alunos.length; i ++ ){
      let aluno = alunos[i];
      if(aluno.id == id){
        return aluno;
      }
     }
    return null;

  }
}
