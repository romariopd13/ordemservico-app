import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/shared/models/medico.model';
import { MedicoService } from 'src/app/shared/services/medico.service';

@Component({
  selector: 'app-lista-medico',
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent implements OnInit {
  medicos: Medico[] = []
  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.buscarMedicos()
  }
  buscarMedicos() {
    this.medicoService.getAll().subscribe(res => {
      this.medicos = res
    })
  }
}
