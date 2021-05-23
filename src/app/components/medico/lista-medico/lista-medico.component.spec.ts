import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedicoComponent } from './lista-medico.component';

describe('ListaMedicoComponent', () => {
  let component: ListaMedicoComponent;
  let fixture: ComponentFixture<ListaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
