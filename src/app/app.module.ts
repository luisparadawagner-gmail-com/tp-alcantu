import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component'
import {altaAlumnoComponent} from './altaAlumno/alta-alumno'

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    altaAlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
