import { NgModule } from '@angular/core';
/*Modulos para rutas*/
import { Routes, RouterModule } from '@angular/router';
/*Modulo de componentes */
import { CocheComponent } from './coche/coche.component';
import {PersonaComponent} from './persona/persona.component';
import {AnimalComponent} from './animal/animal.component';
import {HomeComponent} from './home/home.component';
import {DiscosComponent} from './discos/discos.component';
const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'discos' , component: DiscosComponent},
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
