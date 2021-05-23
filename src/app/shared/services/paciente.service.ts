import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_GLOBAL } from 'src/environments/environment';
import { Paciente } from '../models/paciente.model';

@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    constructor(
        private http: HttpClient,
    ) { }

    getAll(): Observable<Paciente[]> {
        return this.http.get<Paciente[]>(`${URL_GLOBAL}/pacientes`);
    }
    getById(id): Observable<Paciente> {
        return this.http.get<Paciente>(`${URL_GLOBAL}/pacientes/${id}`);
    }
    save(Cliente): Observable<Paciente> {
        return this.http.post<Paciente>(`${URL_GLOBAL}/pacientes`, Cliente);
    }
    update(id, cliente): Observable<Paciente> {
        return this.http.put<Paciente>(`${URL_GLOBAL}/pacientes/${id}`, cliente);
    }
    destroy(id): Observable<Paciente> {
        return this.http.delete<Paciente>(`${URL_GLOBAL}/pacientes/${id}`);
    }
}