import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre: string ="Pantalon";
  public todoRopa = ['Camiseta', 'Falda', 'Vestido'];
  getRopa(): Array<string>{
    return this.todoRopa;
  }
  addRopa(nombrePrenda:string): Array<string>{
    this.todoRopa.push(nombrePrenda);
    return this.getRopa();
  }
  deleteRopa(index:number){
    this.todoRopa.splice(index, 1);
  }
  prueba(){
    return this.nombre;
  }
  constructor() { }
}
