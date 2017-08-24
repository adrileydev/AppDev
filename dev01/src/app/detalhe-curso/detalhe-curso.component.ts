import { Subscription } from 'rxjs/Rx';
import { routing } from './../rota';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.inscricao =  this.route.params.subscribe(
      (params: any) => {
    this.id = params['id'];
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();

  }

}
