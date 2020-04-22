import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocheComponent } from './coche/coche.component';
import {PersonaComponent} from './persona/persona.component';
import {AnimalComponent} from './animal/animal.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'persona' , component: PersonaComponent},
  {path: 'coche/:id', component: CocheComponent},
  {path: 'coche', component: CocheComponent},
  {path:'animal/:nombre' , component: AnimalComponent},
  {path:'animal' , component: AnimalComponent},
  // Esta ruta siempre va al final por si dejo en blanco la ruta o me 
  // equivoco
  {path:'' , component: HomeComponent},
  {path:'**' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
