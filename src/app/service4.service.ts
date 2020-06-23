import { Injectable } from '@angular/core';
import { VARIABLES4 } from './farm/serve1';
import { VARIABLEB4 } from './farm/backends4';

@Injectable({
  providedIn: 'root'
})
export class Service4Service {

  constructor() { }
  service4(){
    var json = [];
    var nombre4 = { 'Name': VARIABLES4['params']['id'], 'Category': 'Services','Role': 'Masinfo' }
    json.push(nombre4);
    var keysS4 = Object.keys(VARIABLES4['params']);
    var valueS4 = Object.values(VARIABLES4['params']);
    var listaS4= [];
    var stringS4 = null ;
    for (let i = 0; i < keysS4.length; i++) {
      if (keysS4[i]!= "backends"){
        if (stringS4 == null) {
          stringS4= '- ' + keysS4[i] + ':' + valueS4[i]+ '\n';
        }
        else{
          if (valueS4[i]== '') {
            stringS4= stringS4 + '- ' + keysS4[i]+ '\n';
          }
          else{
            stringS4= stringS4 + '- ' + keysS4[i] + ':' + valueS4[i]+ '\n';
          }
          
        }
      }
    }
    listaS4.push(stringS4);
    var lS4 = listaS4.toString();
    var S4 = { 'Name':lS4, 'Category': VARIABLES4['params']['id'],'Role': 'Otro' }
    json.push(S4);
    if (VARIABLEB4['params'].length != 0) {
      for (let i = 0; i < VARIABLEB4['params'].length; i++) {
        var keysB4 = Object.keys(VARIABLEB4['params'][i]);
        var valueB4 = Object.values(VARIABLEB4['params'][i]);
        var listaB4= [];
        var stringB4 = null;
        for (let i = 0; i < keysB4.length; i++) {
          if (keysB4[i]!= "backends"){
            if (stringB4 == null) {
              stringB4= '- ' + keysB4[i] + ':' + valueB4[i]+ '\n';
            }
            else{
              if (valueB4[i]== '') {
                stringB4= stringB4 + '- ' + keysB4[i]+ '\n';
              }
              else{
                stringB4= stringB4 + '- ' + keysB4[i] + ':' + valueB4[i]+ '\n';
              }
              
            }
          }
        }
        listaB4.push(stringB4);
        var lB4 = listaB4.toString();
        var B4 = { 'Name':lB4, 'Category': lS4,'Role': 'Otro' }
        json.push(B4);
      } 
    }
    return json;
  }
}
