import { TestBed, inject } from '@angular/core/testing';

import { ServicoCursoService } from './servico-curso.service';

describe('ServicoCursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoCursoService]
    });
  });

  it('should be created', inject([ServicoCursoService], (service: ServicoCursoService) => {
    expect(service).toBeTruthy();
  }));
});
