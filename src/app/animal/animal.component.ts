import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router}  from '@angular/router';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  Animales = [
    {
      nombre : "max",
      raza : "perro"
    },
    {
      nombre : "dana",
      raza : "gato"
    }
  ];
  nombre:string;
  constructor(private actRoute: ActivatedRoute, private _router:Router) {
    this.nombre = this.actRoute.snapshot.params.nombre;
  }
  onBack(): void {
    this._router.navigate(['/animal']);
  }
  ngOnInit(): void {
    // this._router.navigate(['/animal']);
  }

}
