import { Injectable } from '@angular/core';
import { VARIABLE } from './farm/farm1';
// import { VARIABLES1 } from './farm/service1';
// import { VARIABLES2 } from './farm/service2';
// import { VARIABLES3 } from './farm/service3';
// import { VARIABLES4 } from './farm/serve1';
// import { VARIABLEB1 } from './farm/backends1';
// import { VARIABLEB2 } from './farm/backends2';
// import { VARIABLEB3 } from './farm/backends3';
// import { VARIABLEB4 } from './farm/backends4';
@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  constructor() { 
    
  }
  todo(){
    var json = [];
    var partes = VARIABLE['description'].split(' ');
    /* Parte principal de nuestro diagrama */
    var principal = {'Name': partes[2], 'Role': 'Principal'};
    json.push(principal);
    /* Parte secundaria */
    var listaSecun = [{ 'Name': 'Global', 'Category': partes[2], 'Role': 'Secundario'},{ 'Name': 'IPDS', 'Category': partes[2], 'Role': 'Secundario'},{ 'Name': 'Services', 'Category': partes[2], 'Role': 'Secundario'},{'Name': VARIABLE['description'], 'Category': 'Global', 'Role': 'Masinfo'}]
    for (let i = 0; i < listaSecun.length; i++) {
      json.push(listaSecun[i]);
    }
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
    return json;
  }
}