import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule, HierarchicalTreeService, DataBindingService, MindMapService } from '@syncfusion/ej2-angular-diagrams';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrgComponent } from './drg/drg.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
    imports: [
        BrowserModule, DiagramModule
    ],
    declarations: [AppComponent, PrincipalComponent, DrgComponent],
    bootstrap: [AppComponent],
    providers: [ HierarchicalTreeService,DataBindingService,MindMapService ],
})
export class AppModule { }
