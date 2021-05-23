import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdemservicoComponent } from './lista-ordemservico.component';

describe('ListaOrdemservicoComponent', () => {
  let component: ListaOrdemservicoComponent;
  let fixture: ComponentFixture<ListaOrdemservicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdemservicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdemservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
