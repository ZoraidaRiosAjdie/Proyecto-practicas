import { Component, OnInit, ViewChild } from "@angular/core";
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';

import { PeticionService} from '../peticion.service';
import { TreeInfo, DiagramComponent, FlowShapeModel, OrthogonalSegmentModel, PointModel, Rect, StackPanel, TextElement, VerticalAlignment } from '@syncfusion/ej2-angular-diagrams';
//import { type } from 'os';
export interface Farm {
    Name: string;
    Role: string;
    color: string;
}
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers : [PeticionService]
  //encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent {
    public boleano : Boolean = true;
    constructor(private _peticionService:PeticionService){

    }
    public diagram: DiagramComponent;
    public node: NodeModel;
    
    public nodeDefaults(node: NodeModel): NodeModel {
        let obj: NodeModel = {};
        obj.shape = { 
                        type: 'Basic', 
                        shape: 'Rectangle',
                    };
        obj.style = { strokeWidth: 1 };
        return obj;
    };
    
    public data: Object = {
        id: 'Name', parentId: 'Category', dataManager: new DataManager(this._peticionService.json()),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            let codes: Object = {
                Principal: "rgb(33, 181, 115)",
                Secundario: "rgb(254, 0,113)",
                Masinfo: "rgb(255, 184, 215)",
                MasinfoB: "rgb(255, 184, 215)",
                Otro: "rgb(170, 217, 196)"
            };
            let rota: Object = {
                Principal: "270"
            };
            let boton : Object = {
                MasinfoB : {type: 'HTML',  
                            content:'<input type="button" value="+" (click)="handleClick(true)"><br><input type="button" value="-" (click)="handleClick(false)">'}, 
                            style: { fill : 'rgb(255, 184, 215)'}
            };
            let margin : Object = {
                Masinfo : { top: 10, left: 10, right: 10, bottom: 10 },
                Principal : { top: 10, left: 10, right: 10, bottom: 10 },
                Secundario : { top: 10, left: 10, right: 10, bottom: 10 },
                MasinfoB : { top: 10, left: 10, right: 10, bottom: 20 },
                Otro : { top: 10, left: 10, right: 10, bottom: 10 },
            };
            let width :Object = {
                MasinfoB : 80,
            }
            let height :Object = {
                MasinfoB : 80,
            } 
            /*if (this.boleano == true) {
                nodeModel.annotations = [{
                    content: data['Name'], margin : margin[(nodeModel.data as Farm).Role], 
                    style: { color: 'black' ,
                             fill: codes[(nodeModel.data as Farm).Role] },
                    template: boton[(nodeModel.data as Farm).Role]
                }];
                nodeModel.style = { fill : codes[(nodeModel.data as Farm).Role] , strokeColor: '#f5d897', strokeWidth: 1};
                // nodeModel.shape =  boton[(nodeModel.data as Farm).Role];
            }*/
            nodeModel.annotations = [{
                content: data['Name'], margin : margin[(nodeModel.data as Farm).Role], 
                style: { color: 'black' ,
                         fill: codes[(nodeModel.data as Farm).Role] }
                //template: boton[(nodeModel.data as Farm).Role]
            }];
            nodeModel.style = { fill : codes[(nodeModel.data as Farm).Role] , strokeColor: '#f5d897', strokeWidth: 1};
            nodeModel.shape =  boton[(nodeModel.data as Farm).Role];

            // nodeModel.rotateAngle = rota[(nodeModel.data as Farm).Role];
            // nodeModel.annotations = boton[(nodeModel.data as Farm).Role];
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
    handleClick(valor: Boolean) {
        this.boleano = valor;
        console.log(valor);
    }
}
export interface DataInfo {
    [key: string]: string;
}
