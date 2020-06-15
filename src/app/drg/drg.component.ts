import { Component, OnInit, ViewChild } from "@angular/core";
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools, Shape } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';

import { VARIABLE_D} from '../farm/farm1';
import { PeticionService} from '../peticion.service';
import { TreeInfo, DiagramComponent, FlowShapeModel, OrthogonalSegmentModel, PointModel, Rect, StackPanel, TextElement, VerticalAlignment, LayerModel, PageSettingsModel, BasicShape, BasicShapeModel } from '@syncfusion/ej2-angular-diagrams';
import { from } from 'rxjs';
//import { type } from 'os';
export interface Farm {
    Name: string;
    Role: string;
    color: string;
}
@Component({
  selector: 'app-drg',
  templateUrl: './drg.component.html',
  styleUrls: ['./drg.component.css']
})

export class  DrgComponent {
  constructor(){}
    
    public diagram: DiagramComponent;
    public node: NodeModel;
    
    public nodeDefaults(node: NodeModel): NodeModel {
        let obj: NodeModel = {};
        obj.style = { strokeWidth: 1 };
        return obj;
    };
    public data: Object = {
        id: 'Name', parentId: 'Category' , dataManager : new DataManager(VARIABLE_D), 
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            let codes: Object = {
                Principal: "rgb(33, 181, 115)",
                Secundario: "rgb(254, 0,113)",
                Secundario1: "rgb(254, 0,113)",
                Masinfo: "rgb(255, 184, 215)",
                MasinfoB: "rgb(255, 184, 215)",
                Otro: "rgb(170, 217, 196)"
            };
            let rota: Object = {
                Principal: "270"
            };
            let tamaño: Object = {
              Principal: 16,
              Secundario: 12 ,             
              Masinfo: 8,
              MasinfoB: 8,
              Otro: 6 
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
                        fill: codes[(nodeModel.data as Farm).Role], textAlign: 'Left', textOverflow: 'Wrap', bold: bold[(nodeModel.data as Farm).Role], fontSize: tamaño[(nodeModel.data as Farm).Role] },
                // template: boton[(nodeModel.data as Farm).Role]
            }];
            nodeModel.style = { fill : codes[(nodeModel.data as Farm).Role] , strokeColor: '#f5d897', strokeWidth: 1, textAlign: "Left" };
            nodeModel.shape = { type: 'Flow', shape: 'Terminator' };
            //nodeModel.shape =  boton[(nodeModel.data as Farm).Role];
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
}
export interface DataInfo {
    [key: string]: string;
}