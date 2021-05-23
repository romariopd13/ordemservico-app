import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Exame } from 'src/app/shared/models/exame.model';
import { Medico } from 'src/app/shared/models/medico.model';
import { Paciente } from 'src/app/shared/models/paciente.model';
import { PostoColeta } from 'src/app/shared/models/posto-coleta.model';
import { ExameService } from 'src/app/shared/services/exame.service';
import { MedicoService } from 'src/app/shared/services/medico.service';
import { OrdemServicoService } from 'src/app/shared/services/ordemservico.service';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { PostoColetaService } from 'src/app/shared/services/posto-coleta.service';

@Component({
  selector: 'app-formulario-ordemservico',
  templateUrl: './formulario-ordemservico.component.html',
  styleUrls: ['./formulario-ordemservico.component.css']
})
export class FormularioOrdemservicoComponent implements OnInit {
  formulario: FormGroup;
  pacientes: Paciente[] = [];
  postos: PostoColeta[] = [];
  medicos: Medico[] = []
  exames: Exame[] = []
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormularioOrdemservicoComponent>,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private postoColetaService: PostoColetaService,
    private medicoService: MedicoService,
    private exameService: ExameService,
    private ordemServicoService: OrdemServicoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: this.data ? this.data.id : '',
      data: [this.data ? this.data.data : '', Validators.required],
      paciente_id: [this.data ? this.data.paciente_id : null, Validators.required],
      convenio: [this.data ? this.data.convenio : '', Validators.required],
      postocoleta_id: [this.data ? this.data.paciente_id : null, Validators.required],
      medico_id: [this.data ? this.data.paciente_id : null, Validators.required],
      exames: []
    });
    this.buscaPacientes();
    this.buscaPostos();
    this.buscarMedicos();
    this.buscaExames()
  }
  buscaPacientes() {
    this.pacienteService.getAll().subscribe(res => {
      this.pacientes = res.sort((a, b) => a.nome.localeCompare(b.nome));
    })
  }
  buscaPostos() {
    this.postoColetaService.getAll().subscribe(res => {
      this.postos = res.sort((a, b) => a.descricao.localeCompare(b.descricao));
    })
  }
  buscarMedicos() {
    this.medicoService.getAll().subscribe(res => {
      this.medicos = res.sort((a, b) => a.nome.localeCompare(b.nome));
    })
  }
  buscaExames() {
    this.exameService.getAll().subscribe(res => {
      this.exames = res.sort((a, b) => a.descricao.localeCompare(b.descricao));
    })
  }
  enviarFormulario() {
    return this.formulario.value.id ? this.atualizarOS() : this.salvarOS()
  }
  salvarOS() {
    console.log(this.formulario.value);

    this.ordemServicoService.save(this.formulario.value).subscribe(res => {
      this.openSnackBar("Salvo com sucesso!", "Ok")
      this.dialogRef.close('Cadastrado');
    }, error => {
      console.log(error);

      this.openSnackBar("Ops, algo deu errado!", "Cancelar")
    })
  }
  atualizarOS() {
    this.ordemServicoService.update(this.formulario.value.id, this.formulario.value).subscribe(res => {
      this.openSnackBar("Atualizado com sucesso!", "Ok")

      this.dialogRef.close('Alterado');
    }, error => {
      this.openSnackBar("Ops, algo deu errado!", "Cancelar")

    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  compareObjects(object1: any, object2: any) {
    return object1 && object2 && object1.id === object2.id;
  }
  compareFn(exame1: Exame, exame2: Exame) {
    return exame1 && exame2 ? exame1.id === exame2.id : exame1 === exame2;
  }
  calculaExames(items: any[]) {
    return items ? items.reduce((x, y) => x + y.preco, 0) : 0
  }
}
