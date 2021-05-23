import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostoColetaComponent } from './lista-posto-coleta.component';

describe('ListaPostoColetaComponent', () => {
  let component: ListaPostoColetaComponent;
  let fixture: ComponentFixture<ListaPostoColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPostoColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPostoColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
