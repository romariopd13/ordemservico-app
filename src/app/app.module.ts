import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ListaOrdemservicoComponent } from './components/ordemservico/lista-ordemservico/lista-ordemservico.component';
import { FormularioOrdemservicoComponent } from './components/ordemservico/formulario-ordemservico/formulario-ordemservico.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListaExameComponent } from './components/exame/lista-exame/lista-exame.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente/lista-paciente.component';
import { ListaMedicoComponent } from './components/medico/lista-medico/lista-medico.component';
import { ListaPostoColetaComponent } from './components/posto-coleta/lista-posto-coleta/lista-posto-coleta.component';
import { TitleComponent } from './shared/components/title/title.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaOrdemservicoComponent,
    FormularioOrdemservicoComponent,
    PageNotFoundComponent,
    HomeComponent,
    ListaExameComponent,
    ListaPacienteComponent,
    ListaMedicoComponent,
    ListaPostoColetaComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
