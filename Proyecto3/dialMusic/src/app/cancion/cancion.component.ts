import { Component, OnInit } from '@angular/core';
import { RecursoCancionService } from '../servicios/recurso-cancion.service';
import { Cancion } from '../interfaz/cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  dataSource:any[] = [];

  constructor(private recursoCancionService: RecursoCancionService) { }

  ngOnInit(): void {
    this.recursoCancionService.obtenerDatos().subscribe(respuesta => {
      this.dataSource = respuesta as any
    })
  }

}
