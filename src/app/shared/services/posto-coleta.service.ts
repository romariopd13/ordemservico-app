import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_GLOBAL } from 'src/environments/environment';
import { PostoColeta } from '../models/posto-coleta.model';

@Injectable({
    providedIn: 'root'
})
export class PostoColetaService {
    constructor(
        private http: HttpClient,
    ) { }

    getAll(): Observable<PostoColeta[]> {
        return this.http.get<PostoColeta[]>(`${URL_GLOBAL}/postocoletas`);
    }
    getById(id): Observable<PostoColeta> {
        return this.http.get<PostoColeta>(`${URL_GLOBAL}/postocoletas/${id}`);
    }
    save(Cliente): Observable<PostoColeta> {
        return this.http.post<PostoColeta>(`${URL_GLOBAL}/postocoletas`, Cliente);
    }
    update(id, cliente): Observable<PostoColeta> {
        return this.http.put<PostoColeta>(`${URL_GLOBAL}/postocoletas/${id}`, cliente);
    }
    destroy(id): Observable<PostoColeta> {
        return this.http.delete<PostoColeta>(`${URL_GLOBAL}/postocoletas/${id}`);
    }
}