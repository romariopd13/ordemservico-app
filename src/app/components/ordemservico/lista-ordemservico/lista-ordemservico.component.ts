import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdemServicoService } from 'src/app/shared/services/ordemservico.service';
import { FormularioOrdemservicoComponent } from '../formulario-ordemservico/formulario-ordemservico.component';

@Component({
  selector: 'app-lista-ordemservico',
  templateUrl: './lista-ordemservico.component.html',
  styleUrls: ['./lista-ordemservico.component.css']
})
export class ListaOrdemservicoComponent implements OnInit {
  ordens: any[] = [];
  constructor(public dialog: MatDialog, private ordemservicoService: OrdemServicoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buscarOrdens();
  }
  openDialog(item?) {
    const dialogRef = this.dialog.open(FormularioOrdemservicoComponent, {
      data: item ? item : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.buscarOrdens()
      }
    });
  }
  buscarOrdens() {
    this.ordemservicoService.getAll().subscribe(res => {
      this.ordens = res
    })
  }
  apagarOS(item) {
    let index = this.ordens.indexOf(item);
    this.ordemservicoService.destroy(item.id).subscribe(res => {
      this.ordens.splice(index, 1)
      this.openSnackBar("Poof, apagado com sucesso.", "Ok")
    }, error => {
      this.openSnackBar("Ops, não foi possível apagar.", "Cancelar")
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
