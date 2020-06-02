import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule, MindMapService, DataBindingService, BpmnDiagramsService } from '@syncfusion/ej2-angular-diagrams';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrgComponent } from './drg/drg.component';


@NgModule({
  declarations: [
    AppComponent,
    DrgComponent
  ],
  imports: [
    BrowserModule,
    DiagramModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    //HttpModule
    
  ],
  providers: [MindMapService,DataBindingService,BpmnDiagramsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
