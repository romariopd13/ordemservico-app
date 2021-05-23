import { Component, OnInit } from '@angular/core';
import { Exame } from 'src/app/shared/models/exame.model';
import { ExameService } from 'src/app/shared/services/exame.service';

@Component({
  selector: 'app-lista-exame',
  templateUrl: './lista-exame.component.html',
  styleUrls: ['./lista-exame.component.css']
})
export class ListaExameComponent implements OnInit {
  exames: Exame[] = []
  constructor(private exameService: ExameService) { }

  ngOnInit(): void {
    this.buscaExames();
  }
  buscaExames() {
    this.exameService.getAll().subscribe(res => {
      this.exames = res;
    })
  }
}
