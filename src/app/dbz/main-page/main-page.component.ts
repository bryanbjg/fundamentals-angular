import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },

    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  nuevo : Personaje = {
    nombre: 'Maestro rochy',
    poder: 6000
  }


  agregarNuevoPersonaje(personaje : Personaje){
    this.personajes.push(personaje);
  }
}
