import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
// import { runInThisContext } from 'vm';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  public persona : Persona;
  public personas : Array <Persona>;
  public trabajadorExtranjero : boolean;
  public color : string = 'blue'; 
  public color_seleccionado : string;
  // public administrador: boolean;
  public people : Array <string>;
  constructor() {
    this.persona = new Persona ("Alex",27,"fluido", false);
    this.personas = [
      new Persona ('Maria',18,'mujer', true),
      new Persona ('Juan',17,'hombre', false),
    ];
    this.trabajadorExtranjero = false;
    this.color_seleccionado='#ccc';
  }
  cambiarExterno(valor){
    this.trabajadorExtranjero = valor;
  }
  // cambiar(valor){
  //   this.administrador= valor;
  // }
  ngOnInit(): void {
  }

}
