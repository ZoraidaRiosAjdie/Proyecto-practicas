import { Component, OnInit } from '@angular/core';
import { RopaService } from '../servicios/ropa.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo : string = "Página principal";
  public mostrar : Array<string>;
  public nombrePrenda : string;
  constructor(
    private _ropaService : RopaService
  ) { 
    this.mostrar = this._ropaService.getRopa();
  }
  ropa_seleccionada (nombrePrenda:string): Array<string> {
    this._ropaService.addRopa(nombrePrenda);
    return this.mostrar;
  }
  delete(index:number){
    this._ropaService.deleteRopa(index);
  }
  ngOnInit(): void {
    console.log(this._ropaService.prueba());
  }

}
