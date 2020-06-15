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
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools,  } from '@syncfusion/ej2-diagrams';
/* DataManager : se comunica con la fuente de datos y devuelve el resultado deseado en función de la consulta proporcionada. */
import { DataManager } from '@syncfusion/ej2-data';
/* Importación de variable */
import { VARIABLE } from '../farm/farm';
/* DiagramComponent: importa los componentes de los diagramas */
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
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
    /* diagram: nos servirá luego en el .html para poner los componentes del diagrama, despues de poner esto 
    podemos poner el resto de objetos */
    public diagram: DiagramComponent
    /*  */
    public data: Object = {
        id: 'Name', parentId: 'Category' , dataManager : new DataManager(VARIABLE), 
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            let codes: Object = {
                Principal: "rgb(33, 181, 115)",
                Secundario: "rgb(254, 0,113)",
                Masinfo: "rgb(255, 184, 215)",
                MasinfoB: "rgb(255, 184, 215)",
                Otro: "rgb(170, 217, 196)"
            };
            let tamaño: Object = {
                Principal: 16,
                Secundario: 12 ,             
                Masinfo: 8,
                MasinfoB: 8,
                Otro: 6 
            };
            let rota: Object = {
                Principal: "270"
            };
            let boton : Object = {
                Secundario1 : {
                    type:'HTML',
                    content:"<button (click)='d(true)'>+</button><button (click)='d(false)'>-</button>"
                }
            };
            let margin : Object = {
                Masinfo : { top: 30, left: 30, right: 30, bottom: 30 },
                Principal : { top: 10, left: 10, right: 10, bottom: 10 },
                Secundario : { top: 30, left: 30, right: 30, bottom: 30 },
                MasinfoB : { top: 30, left: 30, right: 30, bottom: 30 },
                Otro : { top: 30, left: 30, right: 30, bottom: 30 },
            };
            let bold :Object = {
                Masinfo : true,
            }

            nodeModel.annotations = [{
                content: data['Name'], margin : margin[(nodeModel.data as Farm).Role],
                style: { color: 'black' ,   
                        fill: codes[(nodeModel.data as Farm).Role], textAlign: 'Left', textOverflow: 'Wrap', bold: bold[(nodeModel.data as Farm).Role], fontSize: tamaño[(nodeModel.data as Farm).Role]},
            }];
            nodeModel.style = { fill : codes[(nodeModel.data as Farm).Role] , strokeColor: '#f5d897', strokeWidth: 1, textAlign: "Left" };
            nodeModel.shape = { type: 'Flow', shape: 'Terminator' };
            // nodeModel.shape =  boton[(nodeModel.data as Farm).Role];
            
        }
    };

    public connDefaults(connector: ConnectorModel): void {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#4d4d4d';
        connector.targetDecorator.shape = 'None';
    };

    public tool: DiagramTools = DiagramTools.ZoomPan;
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
    public layout: Object = {
        type: 'HierarchicalTree',
            horizontalSpacing: 25,
            verticalSpacing: 30,
            horizontalAlignment: 'Left',
            verticalAlignment: 'Top',
            orientation: 'LeftToRight'
    };
}
export interface DataInfo {
    [key: string]: string;
}
