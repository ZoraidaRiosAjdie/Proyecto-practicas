import { Component, ViewChild } from "@angular/core";
/* Estos son los import que nos va a servir para hacer nuestro diagrama llamen a las siguientes clases:
    - Clase Diagram
    - Clase NodeModel 
    - Clase ConnectorModel
    - Clase SnapConstraints
    - Clase SnapSettingsModel
    - Clase DiagramTools
    - Clase Shape
*/
import {ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools, whiteSpaceToString, Shape  } from '@syncfusion/ej2-diagrams';
/* DataManager : se comunica con la fuente de datos y devuelve el resultado deseado en función de la consulta proporcionada. */
import { DataManager } from '@syncfusion/ej2-data';
/* Importación de variable */
import { PeticionService } from '../peticion.service';
import { VARIABLE } from '../farm/farm1';

import { Diagram, NodeModel, BasicShapeModel, ShapeStyleModel, DiagramConstraints  } from '@syncfusion/ej2-angular-diagrams';

import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  providers:[PeticionService]
})
export class PruebaComponent{
  public vari1 :String;
  public vari2 : string;
  constructor( private _peticionService: PeticionService ){
    var vari = VARIABLE['description'].split(' ');
    this.vari1 = vari[2];
    this.vari2 = VARIABLE['description'];

  }
  public style: ShapeStyleModel = { fill: 'rgb(33, 181, 115)', strokeDashArray: '5,5' };
  public style1: ShapeStyleModel = { fill: 'rgb(254, 0,113)', strokeDashArray: '5,5' };
  public connDefaults(connector: ConnectorModel): void {
    /* Los conectores serán de tipo 'Orthogonal' */
    connector.type = 'Orthogonal';
    /* Tendran el sguiente color */
    connector.style.strokeColor = '#4d4d4d';
    /* Y no tendrá nungun decorado */
    connector.targetDecorator.shape = 'None';
  };
  public layout: Object = {
    /* En este caso tengo puesta esta forma porque es más flexible a la hora de trabajar con ella 
    , tambien hay formas más congretas y menos flibles en esta librería */
    type: 'HierarchicalTree',
    /* Al ser tan flexible este typo de forma nos deja dar espacios tanto verticales colo horicontales 
    a cada nodo */
        horizontalSpacing: 25,
        verticalSpacing: 30,
    /* Con la orientacion podemos hacer que los nodos queden de izquierda a derecha, y no como quedan 
    de forma original que es de arriba a abajo */
        orientation: 'LeftToRight'
  }; 
  @ViewChild("diagram")
  public shape: BasicShapeModel;
  ngOnInit(): void {
    this.shape = { type: "Basic", shape: "Rectangle" };
  }
  /*onClick(event) { 
    if (event.elementType == "node") { 
        document.getElementById("text").innerHTML = 'Hola'; 
    } 
  } */
  public b : boolean = false;
  boton (valor: boolean){
    this.b = valor;
  }
  public tool: DiagramTools = DiagramTools.ZoomPan;
  public diagramConstraints: DiagramConstraints = DiagramConstraints.Default & ~DiagramConstraints.PageEditable;
}

