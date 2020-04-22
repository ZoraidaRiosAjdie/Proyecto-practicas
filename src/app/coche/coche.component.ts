import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
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
  id:string;
  constructor(private actRoute: ActivatedRoute) { 
    this.id = this.actRoute.snapshot.params.id;
  }
  ngOnInit(): void {
  }
  onBack(): void {
  }
}
