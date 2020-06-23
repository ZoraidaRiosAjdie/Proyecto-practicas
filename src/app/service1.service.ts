import { Injectable } from '@angular/core';
import { VARIABLES1 } from './farm/service1';
import { VARIABLEB1 } from './farm/backends1';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  service1(){
    var json = [];
    var nombre1 = { 'Name': VARIABLES1['params']['id'], 'Category': 'Services','Role': 'Masinfo' }
    json.push(nombre1);
    var keysS1 = Object.keys(VARIABLES1['params']);
    var valueS1 = Object.values(VARIABLES1['params']);
    var listaS1= [];
    var stringS1 = null ;
    for (let i = 0; i < keysS1.length; i++) {
      if (keysS1[i]!= "backends"){
        if (stringS1 == null) {
          stringS1= '- ' + keysS1[i] + ':' + valueS1[i]+ '\n';
        }
        else{
          if (valueS1[i]== '') {
            stringS1= stringS1 + '- ' + keysS1[i]+ '\n';
          }
          else{
            stringS1= stringS1 + '- ' + keysS1[i] + ':' + valueS1[i]+ '\n';
          }
          
        }
      }
    }
    listaS1.push(stringS1);
    var lS1 = listaS1.toString();
    var S1 = { 'Name':lS1, 'Category': VARIABLES1['params']['id'],'Role': 'Otro' }
    json.push(S1);
    /* Bakends */
    if (VARIABLEB1['params'].length != 0) {
      for (let i = 0; i < VARIABLEB1['params'].length; i++) {
        var keysB1 = Object.keys(VARIABLEB1['params'][i]);
        var valueB1 = Object.values(VARIABLEB1['params'][i]);
        var listaB1= [];
        var stringB1 = null;
        for (let i = 0; i < keysB1.length; i++) {
          if (keysB1[i]!= "backends"){
            if (stringB1 == null) {
              stringB1= '- ' + keysB1[i] + ':' + valueB1[i]+ '\n';
            }
            else{
              if (valueB1[i]== '') {
                stringB1= stringB1 + '- ' + keysB1[i]+ '\n';
              }
              else{
                stringB1= stringB1 + '- ' + keysB1[i] + ':' + valueB1[i]+ '\n';
              }
              
            }
          }
        }
        listaB1.push(stringB1);
        var lB1 = listaB1.toString();
        var B1 = { 'Name':lB1, 'Category': lS1,'Role': 'Otro' }
        json.push(B1);
      } 
    }
    return json;
  }
}
