import { Injectable } from '@angular/core';
import { VARIABLES2 } from './farm/service2';
import { VARIABLEB2 } from './farm/backends2';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { }
  service2(){
    var json = [];
    var nombre2 = { 'Name': VARIABLES2['params']['id'], 'Category': 'Services','Role': 'Masinfo' }
    json.push(nombre2);
    var keysS2 = Object.keys(VARIABLES2['params']);
    var valueS2 = Object.values(VARIABLES2['params']);
    var listaS2= [];
    var stringS2 = null ;
    for (let i = 0; i < keysS2.length; i++) {
      if (keysS2[i]!= "backends"){
        if (stringS2 == null) {
          stringS2= '- ' + keysS2[i] + ':' + valueS2[i]+ '\n';
        }
        else{
          if (valueS2[i]== '') {
            stringS2= stringS2 + '- ' + keysS2[i]+ '\n';
          }
          else{
            stringS2= stringS2 + '- ' + keysS2[i] + ':' + valueS2[i]+ '\n';
          }
          
        }
      }
    }
    listaS2.push(stringS2);
    var lS2 = listaS2.toString();
    var S2 = { 'Name':lS2, 'Category': VARIABLES2['params']['id'],'Role': 'Otro' }
    json.push(S2);
    /* Bakends */
    if (VARIABLEB2['params'].length != 0) {
      for (let i = 0; i < VARIABLEB2['params'].length; i++) {
        var keysB2 = Object.keys(VARIABLEB2['params'][i]);
        var valueB2 = Object.values(VARIABLEB2['params'][i]);
        var listaB2= [];
        var stringB2 = null;
        for (let i = 0; i < keysB2.length; i++) {
          if (keysB2[i]!= "backends"){
            if (stringB2 == null) {
              stringB2= '- ' + keysB2[i] + ':' + valueB2[i]+ '\n';
            }
            else{
              if (valueB2[i]== '') {
                stringB2= stringB2 + '- ' + keysB2[i]+ '\n';
              }
              else{
                stringB2= stringB2 + '- ' + keysB2[i] + ':' + valueB2[i]+ '\n';
              }
              
            }
          }
        }
        listaB2.push(stringB2);
        var lB2 = listaB2.toString();
        var B2 = { 'Name':lB2, 'Category': lS2,'Role': 'Otro' }
        json.push(B2);
      } 
    }
    return json;
  }
}
