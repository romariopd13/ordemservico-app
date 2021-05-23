import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_GLOBAL } from 'src/environments/environment';
import { Exame } from '../models/exame.model';

@Injectable({
    providedIn: 'root'
})
export class ExameService {
    constructor(
        private http: HttpClient,
    ) { }

    getAll(): Observable<Exame[]> {
        return this.http.get<Exame[]>(`${URL_GLOBAL}/exames`);
    }
    getById(id): Observable<Exame> {
        return this.http.get<Exame>(`${URL_GLOBAL}/exames/${id}`);
    }
    save(exame): Observable<Exame> {
        return this.http.post<Exame>(`${URL_GLOBAL}/exames`, exame);
    }
    update(id, exame): Observable<Exame> {
        return this.http.put<Exame>(`${URL_GLOBAL}/exames/${id}`, exame);
    }
    destroy(id): Observable<Exame> {
        return this.http.delete<Exame>(`${URL_GLOBAL}/exames/${id}`);
    }
}