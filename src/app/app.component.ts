import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	tareas : string[] = [];

	agregar(tarea : string) {
		if(tarea) {
			this.tareas.push(tarea);
		}
	}

	eliminar(tarea : string) {
		if(tarea) {
			const index: number = this.tareas.indexOf(tarea);
			if (index !== -1) {
				this.tareas.splice(index, 1);
			}    
		}
	}
}
