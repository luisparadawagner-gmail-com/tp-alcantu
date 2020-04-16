import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-alta-alumno',
    templateUrl: './alta-alumno.component.html',
    styleUrls: [ './alta-alumno.component.css' ]
})

export class AltaAlumnoComponent{

    personaForm = new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        dni: new FormControl(''),
        edad: new FormControl(''),
        direccion: new FormControl('')
    });

    guardarPersona(){
        debugger;
        this.personaForm.value;
        console.log(this.personaForm.value)
    }
    
}