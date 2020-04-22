import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {
  public myForm : FormGroup;
  constructor(
    public fb : FormBuilder
  ) { 
    this.myForm = this.fb.group({
      titulo: ['', [Validators.required]],
      interprete: ['',[Validators.required, Validators.pattern]],
      num_pistas: ['',[Validators.required, Validators.maxLength(2)]],
      anyo: ['', [Validators.required]],
    });
  }
  saveData(){
    console.log(this.myForm.value);
  }
  ngOnInit(): void {
  }

}
