import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';

@NgModule({
	declarations: [ AppComponent, AltaAlumnoComponent],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
