import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { AnimalComponent } from './animal/animal.component';
import { HomeComponent } from './home/home.component';
import { CocheComponent } from './coche/coche.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    AnimalComponent,
    HomeComponent,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
