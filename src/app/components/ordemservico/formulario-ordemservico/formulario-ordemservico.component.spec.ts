import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOrdemservicoComponent } from './formulario-ordemservico.component';

describe('FormularioOrdemservicoComponent', () => {
  let component: FormularioOrdemservicoComponent;
  let fixture: ComponentFixture<FormularioOrdemservicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioOrdemservicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioOrdemservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
