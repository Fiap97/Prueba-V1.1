import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaNoticiaComponent } from './componentes/tarjeta-noticia/tarjeta-noticia.component';
import { InicioScreenComponent } from './pantallas/inicio-screen/inicio-screen.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { DetalleNoticiaScreenComponent } from './pantallas/detalle-noticia-screen/detalle-noticia-screen.component';
import { TarjetaDetalleComponent } from './componentes/tarjeta-detalle/tarjeta-detalle.component';
import { TarjetaSemanalComponent } from './componentes/tarjeta-semanal/tarjeta-semanal.component';
import { NoticiasSemanaScrennComponent } from './pantallas/noticias-semana-screnn/noticias-semana-screnn.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaNoticiaComponent,
    InicioScreenComponent,
    NavegacionComponent,
    DetalleNoticiaScreenComponent,
    TarjetaDetalleComponent,
    TarjetaSemanalComponent,
    NoticiasSemanaScrennComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
