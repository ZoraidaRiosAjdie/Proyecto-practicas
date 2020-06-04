import { Component, OnInit, ViewChild } from "@angular/core";
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';

import { PeticionService} from '../peticion.service';
import { TreeInfo, DiagramComponent, FlowShapeModel, OrthogonalSegmentModel, PointModel, Rect } from '@syncfusion/ej2-angular-diagrams';
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
    /*@ViewChild("diagram")
    public data: Object[] = this._peticionService.json();
    public diagram: DiagramComponent;
    public getNodeDefaults(node: NodeModel): NodeModel {
        let codes: Object = {
            Principal: "rgb(0, 139,139)",
            Secundario: "rgb(30, 30,113)",
            Masinfo: "rgb(0, 100,0)",
            Otro: "rgb(0, 139,139)"
        };
        node.height = 100;
        node.width = 100;
        node.style.fill = 'blue'
        //node.style.fill = codes[(node.data as Farm).Role];;
        node.style.strokeColor = "White";
        return node;
    }
    ngOnInit(): void {
    }*/
    /*@ViewChild("diagram") public layout: LayoutModel;
    
    public data: Object[] = this._peticionService.json();
    public pivot : PointModel;
    
    public nodeDefaults(node: NodeModel): NodeModel {
      let codes: Object = {
        Principal: "rgb(0, 139,139)",
        Secundario: "rgb(30, 30,113)",
        Masinfo: "rgb(0, 100,0)",
        Otro: "rgb(0, 139,139)"
      };
      let lx : Object= {
          Principal: 'Horizontal',
          Secundario: 'Vertical'
      }
      node.width = 70;
      node.height = 30;
      node.annotations = [
        { content: (node.data as Farm).Name, style: { color: "white" } }
      ];
      node.shape ={
        type: 'Text',
      };
      node.style.fill = codes[(node.data as Farm).Role];
      node.flip = 'Vertical';
      return node;
    }
  
    public connectorDefaults(connector: ConnectorModel): ConnectorModel {
      connector.type = "Orthogonal";
      connector.cornerRadius = 0;
      return connector;
    }
    public dataSourceSettings: DataSourceModel ={
        id: 'Name', parentId: 'Category', dataManager: new DataManager(this.data as JSON[], new Query().take(7))
    }
    ngOnInit(): void {
      this.layout = {
        type: 'OrganizationalChart',
        getLayoutInfo: (node: Node, options: TreeInfo) => {
            if (!options.hasSubTree) {
                options.type = 'Right';
                options.orientation = 'Vertical';
            }
        }
      };
      this.dataSourceSettings;
    }
}*/
    public node: NodeModel;
    public nodeDefaults(node: NodeModel): NodeModel {
        let obj: NodeModel = {};
        obj.shape = { type: 'Basic', shape: 'Rectangle' };
        obj.style = { strokeWidth: 1 };
        
        //obj.flip = 'Vertical';
        return obj;
    };
    
    public data: Object = {
        id: 'Name', parentId: 'Category', dataManager: new DataManager(this._peticionService.json()),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            let codes: Object = {
                Principal: "rgb(0, 139,139)",
                Secundario: "rgb(30, 30,113)",
                Masinfo: "rgb(0, 100,0)",
                Otro: "rgb(0, 139,139)"
            };
            let rota: Object = {
                Principal: "270"
            };
            nodeModel.annotations = [{
                content: data['Name'], margin: { top: 10, left: 10, right: 10, bottom: 10 },
                style: { color: 'black' }
            }];
            nodeModel.style = { fill: codes[(nodeModel.data as Farm).Role] , strokeColor: '#f5d897', strokeWidth: 1 };
            nodeModel.rotateAngle = rota[(nodeModel.data as Farm).Role]
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
            //set layout alignment
            //bounds: new Rect(100, 0, 500, 500),
            horizontalSpacing: 25,
            verticalSpacing: 30,
            horizontalAlignment: 'Left',
            verticalAlignment: 'Top',
            orientation: 'LeftToRight'
    };
    /*@ViewChild("diagram")
    public titulo: FlowShapeModel;
    public description: FlowShapeModel;
    public services: FlowShapeModel;
    //public pivot: PointModel = { x: 0.5, y: 0.5 };
    public params: FlowShapeModel;
    public nodeDefaults(node: NodeModel): NodeModel {
        node.height = 50;
        node.width = 140;
        node.flip = 'Vertical';
        //node.offsetX = 300;
        //node.rotateAngle = 270;
        return node;
    }
    public connectorDefaults(obj: ConnectorModel): ConnectorModel {
        obj.type = "Orthogonal";
        obj.targetDecorator = { shape: "Arrow", width: 10, height: 10 };
        return obj;
    }
    ngOnInit(): void {
        this.titulo = { type: 'Flow', shape: 'Terminator' };
        this.description = { type: 'Flow', shape: 'Terminator' };
        this.services = { type: 'Flow', shape: 'Terminator' };
        this.params = { type: 'Flow', shape: 'Terminator' };
        //this.segment1 = [{ length: 30, direction: "Right" }, { length: 300, direction: "Bottom" }];
        //this.segment2 = [{ length: 30, direction: "Left" }, { length: 200, direction: "Top" }];
    }*/
}
export interface DataInfo {
    [key: string]: string;
}
