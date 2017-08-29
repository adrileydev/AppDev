import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoformComponent } from './cursoform.component';

describe('CursoformComponent', () => {
  let component: CursoformComponent;
  let fixture: ComponentFixture<CursoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
