import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CancionComponent } from './cancion/cancion.component';
import { ArtistaComponent } from './artista/artista.component';
import { AlbumComponent } from './album/album.component';
import { FiltroComponent } from './filtro/filtro.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "inicio", component: InicioComponent },
  { path: "cancion", component: CancionComponent },
  { path: "artista", component: ArtistaComponent },
  { path: "album", component: AlbumComponent },
  { path: "filtro/:id", component: FiltroComponent },
  { path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
