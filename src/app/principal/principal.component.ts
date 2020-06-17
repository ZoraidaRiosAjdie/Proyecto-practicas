import { Component } from "@angular/core";
/* Estos son los import que nos va a servir para hacer nuestro diagrama llamen a las siguientes clases:
    - Clase Diagram
    - Clase NodeModel 
    - Clase ConnectorModel
    - Clase SnapConstraints
    - Clase SnapSettingsModel
    - Clase DiagramTools
    - Clase Shape
*/
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools, whiteSpaceToString,  } from '@syncfusion/ej2-diagrams';
/* DataManager : se comunica con la fuente de datos y devuelve el resultado deseado en función de la consulta proporcionada. */
import { DataManager } from '@syncfusion/ej2-data';
/* Importación de variable */
import { VARIABLE } from '../farm/farm';
/* DiagramComponent: importa los componentes de los diagramas */
import { DiagramComponent, ScrollSettingsModel } from '@syncfusion/ej2-angular-diagrams';
import { fail } from 'assert';
import { disableDebugTools } from '@angular/platform-browser';
/* Aquí he nombrado una interface que luego más a delante me va a servir para darle 
a cada linea de nuestra lista de objetos con los key de os objetos */
export interface Farm {
    Name: string;
    Role: string;
    color: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
    public b : boolean ;
    /* diagram: nos servirá luego en el .html para poner los componentes del diagrama, despues de poner esto 
    podemos poner el resto de objetos */
    public diagram: DiagramComponent;
    /* DAta: será el objeto que permite que al leer nuestra variable se cree el diagrama , tambien se 
    encarga de la parte estetica de esta, ademas de su contenido   */
    public data: Object = {
        /* Aqui empieza a interpretar nuestra variable, cogiendo Name como un nodo, y Category 
        se encargará de crear los conectores. Tambien podemos ver dataManager el cual se encarga de leer nuetra variable.
        Por último creamos una función llamasa boBinding que se ejecutara dentro del objeto data, esta función 
        tiene el objetivo de diseñar nuestro diagrama. */
        id: 'Name', parentId: 'Category' , dataManager : new DataManager(VARIABLE),
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            /* los objetos let nos sirve para que cada rol pueda tener una propiedad 
            caracteristica, ya que si no las propiedades se tomaran en todo el diagrama */
            /* Color de los nodos */
            let codes: Object = {
                Principal: "rgb(33, 181, 115)",
                Secundario: "rgb(254, 0,113)",
                Masinfo: "rgb(255, 184, 215)",
                MasinfoB: "rgb(255, 184, 215)",
                Otro: "rgb(170, 217, 196)"
            };
            /*Tamaño de letra*/
            let tamaño: Object = {
                Principal: 20,
                Secundario: 16 ,             
                Masinfo: 12,
                MasinfoB: 12,
                Otro: 12 
            };
            /* Margenes */
            let margin : Object = {
                MasinfoB : { top: 30, left: 30, right: 30, bottom: 30 },
                Otro : { top: 10, left: 10, right: 10, bottom: 10 }
            };
            /* Letras en negrita */
            let bold :Object = {
                Masinfo : true,
                Principal: true
            }
            /* Color de la letra */
            let color :Object = {
                Principal: 'white',
                Secundario: 'white',          
                Masinfo: 'black',
                MasinfoB: 'black',
                Otro: 'black'
            }
            let visible :Object = {         
                Masinfo: false,
            }
            /* Define la descripción textual de nodos/conectores */
            nodeModel.annotations = [{
                /* Contenido de los nodos */
                content: data['Name'], margin : margin[(nodeModel.data as Farm).Role],
                /* Estilo de los nodos, cambiando el color de los nodos el interior del */
                style: { color: color[(nodeModel.data as Farm).Role],   
                        fill: codes[(nodeModel.data as Farm).Role], textAlign: 'Left', textOverflow: 'Wrap', bold: bold[(nodeModel.data as Farm).Role], fontSize: tamaño[(nodeModel.data as Farm).Role]}
                        
            }];
            nodeModel.style = { 
                fill : codes[(nodeModel.data as Farm).Role], 
                textAlign: "Left"
            };
            nodeModel.shape = { type: 'Flow', shape: 'Terminator' };
            nodeModel.visible = visible[(nodeModel.data as Farm).Role];
            nodeModel.expandIcon = {
                shape: 'ArrowDown',
                width: 10,
                height: 10
            }
        }
    };

    public connDefaults(connector: ConnectorModel): void {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#4d4d4d';
        connector.targetDecorator.shape = 'None';
    };
    public tool: DiagramTools = DiagramTools.ZoomPan;
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None};
    public layout: Object = {
        type: 'HierarchicalTree',
            horizontalSpacing: 25,
            verticalSpacing: 30,
            horizontalAlignment: 'Left',
            verticalAlignment: 'Top',
            orientation: 'LeftToRight'
    };
    onClick(valor: boolean) { 
         this.b = valor;
    } 
}
export interface DataInfo {
    [key: string]: string;
}
