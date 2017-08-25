import { TestBed, inject } from '@angular/core/testing';

import { AlunoServicesService } from './aluno-services.service';

describe('AlunoServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoServicesService]
    });
  });

  it('should be created', inject([AlunoServicesService], (service: AlunoServicesService) => {
    expect(service).toBeTruthy();
  }));
});
