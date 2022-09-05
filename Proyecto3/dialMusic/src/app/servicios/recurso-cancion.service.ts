import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoCancionService {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('http://localhost:3000/api/canciones')
  }
  obtenerartistas() {
    return this.http.get('http://localhost:3000/api/artistas')
  }
  obtenerAlbums() {
    return this.http.get('http://localhost:3000/api/albums')
  }
  obtenerAlbumsPorId(id: number) {
    return this.http.get('http://localhost:3000/api/albums/'+id.toString())
    }
}
