import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaExameComponent } from './components/exame/lista-exame/lista-exame.component';
import { HomeComponent } from './components/home/home.component';
import { ListaMedicoComponent } from './components/medico/lista-medico/lista-medico.component';
import { FormularioOrdemservicoComponent } from './components/ordemservico/formulario-ordemservico/formulario-ordemservico.component';
import { ListaOrdemservicoComponent } from './components/ordemservico/lista-ordemservico/lista-ordemservico.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente/lista-paciente.component';
import { ListaPostoColetaComponent } from './components/posto-coleta/lista-posto-coleta/lista-posto-coleta.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'postos-coletas', component: ListaPostoColetaComponent },
  { path: 'exames', component: ListaExameComponent },
  { path: 'medicos', component: ListaMedicoComponent },
  { path: 'pacientes', component: ListaPacienteComponent },
  { path: 'ordens-servicos', component: ListaOrdemservicoComponent },

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
