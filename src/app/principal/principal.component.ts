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
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools, whiteSpaceToString, Shape,  } from '@syncfusion/ej2-diagrams';
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
import { PeticionService } from '../peticion.service';
import { Service1Service } from '../service1.service';
import { Service2Service } from '../service2.service';
import { Service3Service } from '../service3.service';
import { Service4Service } from '../service4.service';


import { formatNumber } from '@angular/common';
export interface Farm {
    Name: string;
    Role: string;
    color: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [PeticionService, Service1Service, Service2Service, Service3Service, Service4Service,  ] 
})
export class PrincipalComponent {
    public lista : Array <object>;
    public data: Object
    constructor(
        private _peticionService: PeticionService, 
        private _service1Service: Service1Service,
        private _service2Service: Service2Service,
        private _service3Service: Service3Service,
        private _service4Service: Service4Service,
    ){ 
        var lista1 = [];
        for (let i = 0; i < this._peticionService.todo().length; i++) {
            lista1.push(this._peticionService.todo()[i]);
        }
        for (let i = 0; i < this._service1Service.service1().length; i++) {
            lista1.push(this._service1Service.service1()[i]);
        }
        for (let i = 0; i < this._service2Service.service2().length; i++) {
            lista1.push(this._service2Service.service2()[i]);
        }
        for (let i = 0; i < this._service3Service.service3().length; i++) {
            lista1.push(this._service3Service.service3()[i]);
        }
        for (let i = 0; i < this._service4Service.service4().length; i++) {
            lista1.push(this._service4Service.service4()[i]);
        }
        this.data = {
            /* Aqui empieza a interpretar nuestra variable, cogiendo Name como un nodo, y Category 
            se encargará de crear los conectores. Tambien podemos ver dataManager el cual se encarga de leer nuetra variable.
            Por último creamos una función llamasa boBinding que se ejecutara dentro del objeto data, esta función 
            tiene el objetivo de diseñar nuestro diagrama. */
            id: 'Name', parentId: 'Category' , dataManager : new DataManager(lista1), //expanded :false ,
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
                /* Despliegue del diagrama */
                let despligue :Object = {   
                    Secundario: {
                        /* Este shape hara que cuando la flecha este arriba de haga el despliegue */
                        shape: 'Plus',
                        width: 20,
                        height: 20,
                    },          
                    Masinfo: {
                        shape: 'Plus',
                        width: 20,
                        height: 20,
                    },
                    MasinfoB: {
                        shape: 'Plus',
                        width: 20,
                        height: 20,
                    },
                    Otro: {
                        shape: 'Plus',
                        width: 20,
                        height: 20, 
                    }
                }
                /* Pliegue del diagrama */
                let pliegue :Object = {         
                    Secundario: {
                        /* Este shape hara que cuando la flecha este abajo de haga el pliegue */
                        shape: 'Minus',
                        width: 20,
                        height: 20,
                        visible: false, 
                    },          
                    Masinfo: {
                        shape: 'Minus',
                        width: 20,
                        height: 20,
                        visible: false, 
                    },
                    MasinfoB: {
                        shape: 'Minus',
                        width: 20,
                        height: 20,
                        visible: false, 
                    },
                    Otro: {
                        shape: 'Minus',
                        width: 20,
                        height: 20,
                        visible: false, 
                    }
                }
                let visible : Object = {
                    Masinfo: false,
                    MasinfoB: false,
                    Otro: false
                }
                /* Define la descripción textual de nodos/conectores */
                nodeModel.annotations = [{
                    /* Contenido de los nodos y margen de los nodos
                    Importante: el como se puede ver he usado la interfaz que declare al principio llamada Farm, 
                    para hacer que cada objeto de VARIABLE se divida y asi le de el estilo al objeto que tiene el Role,
                    por ello he creado los let de más arriba*/
                    content: data['Name'], margin : margin[(nodeModel.data as Farm).Role],
                    /* Estilo de los nodos, cambiando el color de los nodos el interior del nodo (fill), de la letra
                    (color), el la alineagición del texto (textAlign), poner la letra en negrita con bold
                    y el tamaño de la letra */
                    style: { color: color[(nodeModel.data as Farm).Role],   
                            fill: codes[(nodeModel.data as Farm).Role], textAlign: 'Left', bold: bold[(nodeModel.data as Farm).Role], 
                            fontSize: tamaño[(nodeModel.data as Farm).Role]
                        },
                    // template:'<div><input type="button" value="Submit"></div>'
                }];
                /* El estilo se lo doy para que aparezca fuera del interior de la del recuadro de cada nodo del diagrama*/
                nodeModel.style = { 
                    fill : codes[(nodeModel.data as Farm).Role]
                };
                /* Para que el filo se de la caja quede de forma redondeada */
                nodeModel.shape = { type: 'Flow', shape: 'Terminator' };
                /* expandIcon nos servirá el despligue de la cajas */
                nodeModel.expandIcon = pliegue[(nodeModel.data as Farm).Role];
                /* Esto nos funcionará para el pliegue de las cajas */
                nodeModel.collapseIcon = despligue[(nodeModel.data as Farm).Role];
                /* Tanto el pliegue como el despligue hará que se cree un boton al lado de cada nodo */
                // nodeModel.visible = visible[(nodeModel.data as Farm).Role];
            }
        };
        console.log(lista1);
    }
    public b : boolean ;
    /* diagram: nos servirá luego en el .html para poner los componentes del diagrama, despues de poner esto 
    podemos poner el resto de objetos */
    public diagram: DiagramComponent;
    /* DAta: será el objeto que permite que al leer nuestra variable se cree el diagrama , tambien se 
    encarga de la parte estetica de esta, ademas de su contenido   */
     
    /* Esto nos servirá para los conectores de nuestro diagrama */
    public connDefaults(connector: ConnectorModel): void {
        /* Los conectores serán de tipo 'Orthogonal' */
        connector.type = 'Orthogonal';
        /* Tendran el sguiente color */
        connector.style.strokeColor = '#4d4d4d';
        /* Y no tendrá nungun decorado */
        connector.targetDecorator.shape = 'None';
    };
    /* DiagramTools nos servirá para el diagrama no se pueda desplazar, si no que el usuario que lo 
    use pueda desplazarse, es como una foto */
    public tool: DiagramTools = DiagramTools.ZoomPan;
    /* SnapSettingsModel se ocupa de la cuadricula del fondo, en este caso esta puesta para que no salga */
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None};
    /* layout se ocupa de la forma del diagrama */
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
}
/* Esta parte nos servirá para interpretar los datos dados y convertirlos en los objetos necesarios para que los 
procese la librería */
export interface DataInfo {
    [key: string]: string;
}
