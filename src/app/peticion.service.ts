import { Injectable } from '@angular/core';
import { VARIABLE } from './farm/farm1';
import { VARIABLES1 } from './farm/service1';
import { VARIABLES2 } from './farm/service2';
import { VARIABLES3 } from './farm/service3';
import { VARIABLES4 } from './farm/serve1';
import { VARIABLEB1 } from './farm/backends1';
import { VARIABLEB2 } from './farm/backends2';
import { VARIABLEB3 } from './farm/backends3';
import { VARIABLEB4 } from './farm/backends4';
@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  constructor() { 
    
  }
  todo(){
    var partes = VARIABLE['description'].split(' ');
    /* Parte principal de nuestro diagrama */
    var principal = {'Name': partes[2], 'Role': 'Principal'};
    var json= [principal];
    /* Parte secundaria */
    var listaSecun = [{ 'Name': 'Global', 'Category': partes[2], 'Role': 'Secundario'},{ 'Name': 'IPDS', 'Category': partes[2], 'Role': 'Secundario'},{ 'Name': 'Services', 'Category': partes[2], 'Role': 'Secundario'}]
    for (let i = 0; i < listaSecun.length; i++) {
      json.push(listaSecun[i]);
    }
    /* Parte GLOBAL */
    var global = {'Name': VARIABLE['description'], 'Role': 'Global'};
    var json= [principal];
    /* Parte IPDS */
    var keys = Object.keys(VARIABLE['params']);
    var value = Object.values(VARIABLE['params']);
    var listaParam= [];
    var string = null ;
    for (let i = 0; i < keys.length; i++) {
      if (string == null) {
        string= '- ' + keys[i] + ':' + value[i]+ '\n';
      }
      else{
        string= string + '- ' + keys[i] + ':' + value[i]+ '\n';
      }
    }
    listaParam.push(string);
    var lParam = listaParam.toString();
    var param = { 'Name':lParam, 'Category': 'IPDS','Role': 'MasinfoB' }
    json.push(param);
    /* Parte service */
    /*Nombre*/
    var nombre1 = { 'Name': VARIABLES1['params']['id'], 'Category': 'Services','Role': 'Masinfo' }
    var nombre2 = { 'Name': VARIABLES2['params']['id'], 'Category': 'Services','Role': 'Masinfo' };
    var nombre3 = { 'Name': VARIABLES3['params']['id'], 'Category': 'Services','Role': 'Masinfo' };
    var nombre4 = { 'Name': VARIABLES4['params']['id'], 'Category': 'Services','Role': 'Masinfo' };
    json.push(nombre1);
    json.push(nombre2);
    json.push(nombre3);
    json.push(nombre4);
    /* Service1 parametros*/
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
    /* Service2 parametros*/
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
    /* Service2 parametros*/
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
    /* Service3 parametros*/
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
    /* Service4 parametros*/
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
    /* Backends */
    /* VARIABLEB1 */
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
    /* VARIABLEB2 */
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
    /* VARIABLEB3 */
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
    /* VARIABLEB4 */
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
