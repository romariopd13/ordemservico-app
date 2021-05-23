import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_GLOBAL } from 'src/environments/environment';
import { Medico } from '../models/medico.model';

@Injectable({
    providedIn: 'root'
})
export class MedicoService {
    constructor(
        private http: HttpClient,
    ) { }

    getAll(): Observable<Medico[]> {
        return this.http.get<Medico[]>(`${URL_GLOBAL}/medicos`);
    }
    getById(id): Observable<Medico> {
        return this.http.get<Medico>(`${URL_GLOBAL}/medicos/${id}`);
    }
    save(Cliente): Observable<Medico> {
        return this.http.post<Medico>(`${URL_GLOBAL}/medicos`, Cliente);
    }
    update(id, cliente): Observable<Medico> {
        return this.http.put<Medico>(`${URL_GLOBAL}/medicos/${id}`, cliente);
    }
    destroy(id): Observable<Medico> {
        return this.http.delete<Medico>(`${URL_GLOBAL}/web/gestaoOrcamentaria/clientes/${id}`);
    }
}