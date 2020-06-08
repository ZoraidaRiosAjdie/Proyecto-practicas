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
                            content:'<input type="button" value="+"><br><input type="button" value="-">'}, style: { fill : 'rgb(255, 184, 215)'}
                // Principal : [{id:"Name", height: 00, width: 60, offset: 0.5, template: '<h1>F<br>A<br>R<br>M</h1>' }]
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
            nodeModel.annotations = [{
                content: data['Name'], margin : margin[(nodeModel.data as Farm).Role], 
                style: { color: 'black' ,
                        fill: codes[(nodeModel.data as Farm).Role] },
                //template: boton[(nodeModel.data as Farm).Role]
            }];
            nodeModel.style = { fill: codes[(nodeModel.data as Farm).Role] , strokeColor: '#f5d897', strokeWidth: 1};
            nodeModel.shape =  boton[(nodeModel.data as Farm).Role]
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
    /*@ViewChild("diagram")
    public diagram: DiagramComponent;
    public offset: PointModel
    public verticalAlignment: VerticalAlignment
    public getTextElement(text: string): TextElement {
        let textElement: TextElement = new TextElement();
        textElement.width = 50;
        textElement.height = 20;
        textElement.content = text;
        return textElement;
    };

    public addRows(column: StackPanel) {
        column.children.push(this.getTextElement('Row1'));
        column.children.push(this.getTextElement('Row2'));
        column.children.push(this.getTextElement('Row3'));
        column.children.push(this.getTextElement('Row4'));
    };
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    }
    ngOnInit(): void {
        this.verticalAlignment = 'Top';
        this.offset = {y: 1};
        this.diagram.setNodeTemplate = (obj: NodeModel, diagram: Diagram): StackPanel => {
            if (obj.id.indexOf('node1') !== -1) {
                // It will be replaced with grid panel
                let table: StackPanel = new StackPanel();
                table.orientation = 'Horizontal';
                let column1: StackPanel = new StackPanel();
                column1.children = [];
                column1.children.push(this.getTextElement('Column1'));
                this.addRows(column1);
                let column2: StackPanel = new StackPanel();
                column2.children = [];
                column2.children.push(this.getTextElement('Column2'));
                this.addRows(column2);
                table.children = [column1, column2];
                return table;
            }
            return null
        }
    }*/
}
  
/*export class Default{    
    rendereComplete() {  
      //click event for html content  
      document.getElementById("input").onclick = function () {  
        alert("button")  
      }  
    }  
}*/
export interface DataInfo {
    [key: string]: string;
}
