import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule, HierarchicalTreeService, DataBindingService, MindMapService, DiagramContextMenuService } from '@syncfusion/ej2-angular-diagrams';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
    imports: [
        BrowserModule, DiagramModule
    ],
    declarations: [AppComponent, PrincipalComponent],
    bootstrap: [AppComponent],
    providers: [ HierarchicalTreeService,DataBindingService,MindMapService, DiagramContextMenuService ],
})
export class AppModule { }
