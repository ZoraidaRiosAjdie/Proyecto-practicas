// import { Component, ViewEncapsulation } from '@angular/core';
// import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools ,ImageElement, TextStyleModel} from '@syncfusion/ej2-diagrams';
// import { DataManager, Query } from '@syncfusion/ej2-data';
// import { Observable,throwError } from 'rxjs';
// import { catchError,retry } from 'rxjs/operators';
// import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent,DiagramTools, DataBinding,Diagram,HierarchicalTree, NodeModel, ConnectorModel, MindMap,SnapSettingsModel, LayoutModel, DataSourceModel ,  BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject( MindMap );
let species: object[] = [
  { 'Name': 'farm1', 'fillColor': '#3DD94A' },

  { 'Name': 'description', 'Category': 'farm1' },
  { 'Name': 'params', 'Category': 'farm1' },
  { 'Name': 'services', 'Category': 'farm1' },

  { 'Name': 'contimeout : 20', 'Category': 'params' },
  { 'Name': 'error414 : Request URI is too long.', 'Category': 'params' },
  { 'Name': 'error500 : An internal server error occurred. Please try again later.",', 'Category': 'params' },
  { 'Name': 'error501 : This method may not be used.', 'Category': 'params' },
  { 'Name': 'error503 : "The service is not available. Please try again later.",', 'Category': 'params' },
  { 'Name': 'httpverb : "MSRPCext",', 'Category': 'params' },
  { 'Name': 'listener : http', 'Category': 'params' },
  { 'Name': 'reqtimeout : 30,', 'Category': 'params' },
  { 'Name': 'resurrectime : 10,', 'Category': 'params' },
  { 'Name': 'rewritelocation : enabled', 'Category': 'params' },
  { 'Name': 'status : up', 'Category': 'params' },
  { 'Name': 'vip : 192.168.1.252', 'Category': 'params' },
  { 'Name': 'vport : 54', 'Category': 'params' },

  { 'Name': 'List farms', 'Category': 'description' },
  
  { 'Name': 'backends', 'Category': 'services' },
  { 'Name': 'farmguardian" : null', 'Category': 'services' },
  { 'Name': 'httpsb : false', 'Category': 'services' },
  { 'Name': 'id : service1', 'Category': 'services' },
  { 'Name': 'leastresp : false', 'Category': 'services' },
  { 'Name': 'persistence', 'Category': 'services' },
  { 'Name': 'redirect', 'Category': 'services' },
  { 'Name': 'redirecttype', 'Category': 'services' },
  { 'Name': 'sessionid', 'Category': 'services' },
  { 'Name': 'ttl : 120', 'Category': 'services' },
  { 'Name': 'urlp', 'Category': 'services' },
  { 'Name': 'vhost', 'Category': 'services' },

  { 'Name': 'id : 0', 'Category': 'backends' },
  { 'Name': 'ip : 192.168.1.21', 'Category': 'backends' },
  { 'Name': 'port : 50', 'Category': 'backends' },
  { 'Name': 'status : "up', 'Category': 'backends' },
  { 'Name': 'timeout : 1', 'Category': 'backends' },
  { 'Name': 'weight : null', 'Category': 'backends' },
];
@Component({
  selector: 'app-drg',
  templateUrl: './drg.component.html',
  styleUrls: ['./drg.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class  DrgComponent {
  public node: NodeModel;
  public nodeDefaults(node: NodeModel): NodeModel {
        let obj: NodeModel = {};
        /*obj.shape = { 
          type: 'Bpmn',
          shape: 'Event',
          // set the event type as End
          event: {
              event: 'End'
          }
        };*/
        obj.height = 100;
        obj.width = 100;
        obj.style = { strokeWidth: 2 };
        obj.height = 50;
        obj.width = 100;
        obj.borderWidth = 1;
        obj.style = {
            fill: '#6BA5D7',
            strokeWidth: 1,
            strokeColor: '#6BA5D7'
        };
        return obj;
  };
  public data: Object = {
    id: 'Name', parentId: 'Category', dataManager: new DataManager(species, new Query().take(7)),
    //binds the external data with node
    doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
        nodeModel.annotations = [{
            // Margen y color a letras 
            content: data['Name'], margin: { top: 10, left: 10, right: 10, bottom: 10 },
            style: { color: '#000000' }
        }];
        //Se ocupa del cuadrado 
        nodeModel.style = { fill: '#DBFFEA', strokeColor: '#40A067', strokeWidth: 1 };
    }
  };
  public connDefaults(connector: ConnectorModel): void {
    connector.type = 'Orthogonal';
    // connector.cornerRadius = 10
    // connector.style.strokeColor = '#8B8B8B';
    /*Añadido */
    connector.targetDecorator.style.fill  =  '#6BA5D7';
    connector.targetDecorator.style.strokeColor  =  '#8B8B8B';
    connector.targetDecorator.shape = 'None';
    // connector.type = 'Straight';
    //Quita las flexitas
    // connector.targetDecorator.shape = 'None';
  };

  public tool: DiagramTools = DiagramTools.ZoomPan;
  public snapSettings: SnapSettingsModel = {
    constraints: 0
  }
  // public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
  public layout: Object = {
    type: 'MindMap'
    // type: 'RadialTree',
    // root: 'parent'
      // type: 'HierarchicalTree', horizontalSpacing: 40, verticalSpacing: 40,
      // margin: { top: 10, left: 10, right: 10, bottom: 0 }
  };
}
export interface DataInfo {
    [key: string]: string;
}
