import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente.model';
import { PacienteService } from 'src/app/shared/services/paciente.service';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.buscaPacientes();
  }
  buscaPacientes() {
    this.pacienteService.getAll().subscribe(res => {
      this.pacientes = res;
    })
  }
}
