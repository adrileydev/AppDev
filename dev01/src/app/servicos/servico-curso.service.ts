import { Curso } from './../Entidades/Cursos';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoCursoService {
  cursos: Array<Curso>;
  constructor() { }

  getCursos() {
    this.cursos = [
      new Curso(1, 'Adriley Francisco Almeida Pereira', 'Desenvolvimento de sistemas '),
      new Curso(2, 'Patricia Siqueira Pereira', 'Artesanato'),
      new Curso(3, 'Ana Luiza Siqueira Pereira', 'Crisma'),
      new Curso(4, 'Victor Hugo Siqueira Pereira', 'Programação de Computadores'),
      new Curso(5, 'Victor Hugo Siqueira Pereira', 'Crisma'),
      new Curso(6, 'Ana Luiza Siqueira Pereira', 'Inglês'),
      new Curso(7, 'Adriley Francisco Almeida Pereira', 'banco de dados')
    ];
    return this.cursos;
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for(let i = 0; i < cursos.length; i ++ ){
      let curso = cursos[i];
      if(curso.Id == id){
        return curso;
      }
     }
    return null;

  }
}
