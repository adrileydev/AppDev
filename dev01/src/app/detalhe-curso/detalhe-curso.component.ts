import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css']
})
export class DetalheCursoComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) {
    console.log( this.id =  this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
