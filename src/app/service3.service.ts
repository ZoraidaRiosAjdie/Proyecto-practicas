import { Injectable } from '@angular/core';
import { VARIABLES3 } from './farm/service3';
import { VARIABLEB3 } from './farm/backends3';
@Injectable({
  providedIn: 'root'
})
export class Service3Service {

  constructor() { }
  service3(){
    var json = [];
    var nombre3 = { 'Name': VARIABLES3['params']['id'], 'Category': 'Services','Role': 'Masinfo' }
    json.push(nombre3);
    var keysS3 = Object.keys(VARIABLES3['params']);
    var valueS3 = Object.values(VARIABLES3['params']);
    var listaS3= [];
    var stringS3 = null ;
    for (let i = 0; i < keysS3.length; i++) {
      if (keysS3[i]!= "backends"){
        if (stringS3 == null) {
          stringS3= '- ' + keysS3[i] + ':' + valueS3[i]+ '\n';
        }
        else{
          if (valueS3[i]== '') {
            stringS3= stringS3 + '- ' + keysS3[i]+ '\n';
          }
          else{
            stringS3= stringS3 + '- ' + keysS3[i] + ':' + valueS3[i]+ '\n';
          }
          
        }
      }
    }
    listaS3.push(stringS3);
    var lS3 = listaS3.toString();
    var S3 = { 'Name':lS3, 'Category': VARIABLES3['params']['id'],'Role': 'Otro' }
    json.push(S3);
    /* Bakends */
    if (VARIABLEB3['params'].length != 0) {
      for (let i = 0; i < VARIABLEB3['params'].length; i++) {
        var keysB3 = Object.keys(VARIABLEB3['params'][i]);
        var valueB3 = Object.values(VARIABLEB3['params'][i]);
        var listaB3= [];
        var stringB3 = null;
        for (let i = 0; i < keysB3.length; i++) {
          if (keysB3[i]!= "backends"){
            if (stringB3 == null) {
              stringB3= '- ' + keysB3[i] + ':' + valueB3[i]+ '\n';
            }
            else{
              if (valueB3[i]== '') {
                stringB3= stringB3 + '- ' + keysB3[i]+ '\n';
              }
              else{
                stringB3= stringB3 + '- ' + keysB3[i] + ':' + valueB3[i]+ '\n';
              }
              
            }
          }
        }
        listaB3.push(stringB3);
        var lB3 = listaB3.toString();
        var B3 = { 'Name':lB3, 'Category': lS3,'Role': 'Otro' }
        json.push(B3);
      } 
    }
    return json;
  }
}
