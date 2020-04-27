import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-alta-auto',
	templateUrl: './alta-auto.component.html',
	styleUrls: [ './alta-auto.component.css' ]
})
export class AltaAutoComponent {
	constructor(private fb: FormBuilder) {}

	autoForm = this.fb.group({
		marca: [ 'BMW', Validators.required ],
		modelo: [ '' ],
		version: [ '' ],
		origen: [ '' ],
		velocidadMax: this.fb.group({
			kmh: [ '' ],
			mph: [ '' ]
		}),
		puertas: this.fb.array([ this.fb.control('') ]),
		colores: this.fb.array([ this.fb.control('') ])
	});

	get puertas() {
		return this.autoForm.get('puertas') as FormArray;
	}

	get colores() {
		return this.autoForm.get('colores') as FormArray;
	}

	agregarPuerta() {
		this.puertas.push(this.fb.control(''));
	}

	agregarColor() {
		this.colores.push(this.fb.control(''));
	}

	submit() {
		debugger;
		this.autoForm.value;

		this.autoForm.setValue({
			marca: 'Mercedes Benz',
			modelo: 'Clase C C200 Kompressor ',
			version: '2001',
			origen: 'Alemania',
			velocidadMax: {
				kmh: '230',
				mph: '143'
			},
			puertas: this.autoForm.get('puertas').value,
			colores: this.colores.value
		});
	}
}
