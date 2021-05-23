import { Component, OnInit } from '@angular/core';
import { PostoColeta } from 'src/app/shared/models/posto-coleta.model';
import { PostoColetaService } from 'src/app/shared/services/posto-coleta.service';

@Component({
  selector: 'app-lista-posto-coleta',
  templateUrl: './lista-posto-coleta.component.html',
  styleUrls: ['./lista-posto-coleta.component.css']
})
export class ListaPostoColetaComponent implements OnInit {
  postos: PostoColeta[] = [];

  constructor(private postoColetaService: PostoColetaService) { }

  ngOnInit(): void {
    this.buscaPostos()
  }
  buscaPostos() {
    this.postoColetaService.getAll().subscribe(res => {
      this.postos = res
    })
  }
}
