import { Component, OnInit } from '@angular/core';
import { RecursoCancionService } from '../servicios/recurso-cancion.service';
import { Album } from '../interfaz/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  item : Album = {
    album_id: -1,
    artistas_id: -1,
    nombre:	"",
    num_canciones: 0,
    img: ""
  };
  constructor(private recursoCancionService: RecursoCancionService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params["id"]
    this.recursoCancionService.obtenerAlbumsPorId(id).subscribe(respuesta => {
      this.item = respuesta as Album
    })
  }

}
