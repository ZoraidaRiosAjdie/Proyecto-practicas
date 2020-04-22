import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Mosulo para formularios */
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
/*Modulos para rutas*/
import { AppRoutingModule } from './app-routing.module';
/*Modulo para peticiones http*/
import { HttpClientModule } from '@angular/common/http';
/*Modulo para componentes */
import { AppComponent } from './app.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { AnimalComponent } from './Components/animal/animal.component';
import { HomeComponent } from './Components/home/home.component';
import { CocheComponent } from './Components/coche/coche.component';
import { DiscosComponent } from './Components/discos/discos.component';

@NgModule({
  declarations: [
    AppComponent,
    /*declaracion de componentes*/
    PersonaComponent,
    AnimalComponent,
    HomeComponent,
    CocheComponent,
    DiscosComponent
  ],
  imports: [
    BrowserModule,
    /*Import para rutas */
    AppRoutingModule,
    /*Imports para formulario */
    FormsModule,
    ReactiveFormsModule,
    /*Import de peticiones http */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
