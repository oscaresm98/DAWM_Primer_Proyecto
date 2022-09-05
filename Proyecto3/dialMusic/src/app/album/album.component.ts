import { Component, OnInit } from '@angular/core';
import { RecursoCancionService } from '../servicios/recurso-cancion.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  dataSource:any[] = [];

  constructor(private recursoCancionService: RecursoCancionService) { }

  ngOnInit(): void {
    this.recursoCancionService.obtenerAlbums().subscribe(respuesta => {
      this.dataSource = respuesta as any
    })
  }

}
