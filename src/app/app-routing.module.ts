import { NgModule } from '@angular/core';
/*Modulos para rutas*/
import { Routes, RouterModule } from '@angular/router';
/*Modulo de componentes */
import { CocheComponent } from './Components/coche/coche.component';
import {PersonaComponent} from './Components/persona/persona.component';
import {AnimalComponent} from './Components/animal/animal.component';
import {HomeComponent} from './home/home.component';
import {DiscosComponent} from './Components/discos/discos.component';
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
