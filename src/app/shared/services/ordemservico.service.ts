import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_GLOBAL } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrdemServicoService {
    constructor(
        private http: HttpClient,
    ) { }

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(`${URL_GLOBAL}/ordemservicos`);
    }
    getById(id): Observable<any> {
        return this.http.get<any>(`${URL_GLOBAL}/ordemservicos/${id}`);
    }
    save(Cliente): Observable<any> {
        return this.http.post<any>(`${URL_GLOBAL}/ordemservicos`, Cliente);
    }
    update(id, cliente): Observable<any> {
        return this.http.put<any>(`${URL_GLOBAL}/ordemservicos/${id}`, cliente);
    }
    destroy(id): Observable<any> {
        return this.http.delete<any>(`${URL_GLOBAL}/ordemservicos/${id}`);
    }
}