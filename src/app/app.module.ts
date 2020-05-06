import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { AltaAutoComponent } from './alta-auto/alta-auto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoComponent } from './data-bindings/auto/auto.component';
import { MarcaComponent } from './data-bindings/marca/marca.component';

@NgModule({
	declarations: [ AppComponent, AltaAlumnoComponent, AltaAutoComponent, AutoComponent, MarcaComponent],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule, MatButtonModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
