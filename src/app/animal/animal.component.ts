import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router}  from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  providers : [PeticionesService]
})
export class AnimalComponent implements OnInit {
  public datos:Array<any> = [];
  // Animales = [
  //   {
  //     nombre : "max",
  //     raza : "perro"
  //   },
  //   {
  //     nombre : "dana",
  //     raza : "gato"
  //   }
  // ];
  // nombre:string;

  // constructor(/*Http interna */private _peticionesService: PeticionesService ,private actRoute: ActivatedRoute, private _router:Router) {
  constructor(/*Http interna */private _peticionesService: PeticionesService) {
    // this.nombre = this.actRoute.snapshot.params.nombre;
    this._peticionesService.obtener().subscribe(data=>{
      this.datos = data;
    });
  }
  // onBack(): void {
  //   this._router.navigate(['/animal']);
  // }
  ngOnInit(): void {
    this._peticionesService.obtener().subscribe(data=>{
      this.datos = data;
    },
    error => {
      var errorM = error as any;
      console.log(errorM);
    });
  }

}
