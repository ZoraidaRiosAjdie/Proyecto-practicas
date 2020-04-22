import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}  from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';
import { Coche } from './coche';

//import { threadId } from 'worker_threads';
@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  providers : [PeticionesService]
})
export class CocheComponent implements OnInit {
  public coche : Coche;
  Coche=[
    {
      id: "1",
      name:"Cactus",
      descripcion : "Es un captus"
    },
    {
      id: "2",
      name:"ford",
      descripcion : "Es un ford"
    }
  ];
  public datos:Array<any> = [];
  id:string;
  constructor(
    /*Http interna */
    private _peticionesService: PeticionesService ,
    /*Rutas */
    private actRoute: ActivatedRoute) { 
    this.id = this.actRoute.snapshot.params.id;
    this.coche = new Coche ("","");
  }
  onSubmit(){
  }
  ngOnInit(): void {
    this._peticionesService.obtener().subscribe(data=>{
      this.datos = data;
    },
    error => {
      var errorM = error as any;
      console.log(errorM);
    });
    
  }
  onBack(): void {
  }
}
