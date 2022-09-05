import { Component, OnInit } from '@angular/core';
import { RecursoCancionService } from '../servicios/recurso-cancion.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource = [];
  constructor(private recursoCancionService: RecursoCancionService) { }

  ngOnInit(): void {
    this.recursoCancionService.obtenerartistas().subscribe(respuesta => {
      this.dataSource = respuesta as any
    })
  }

}
