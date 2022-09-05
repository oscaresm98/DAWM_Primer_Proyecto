import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MyMaterialModule } from  './material.module';

//Componentes
import {SplashComponent} from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CancionComponent } from './cancion/cancion.component';

//toastr
import { ToastrModule } from 'ngx-toastr';
import { ArtistaComponent } from './artista/artista.component';
import { AlbumComponent } from './album/album.component';

//http
import { HttpClientModule } from '@angular/common/http';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    CancionComponent,
    ArtistaComponent,
    AlbumComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
