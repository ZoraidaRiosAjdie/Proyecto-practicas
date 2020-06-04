import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  public farm: object[] = [
    { 'Name': 'farm1', 'Role': 'Principal'},
  
    
    { 'Name': 'params', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'description', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'services', 'Category': 'farm1', 'Role': 'Secundario'},
  
    { 'Name': 'contimeout : 20', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'error414 : Request URI is too long.', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'error500 : An internal server error occurred. Please try again later.",', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'error501 : This method may not be used.', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'error503 : "The service is not available. Please try again later.",', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'httpverb : "MSRPCext",', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'listener : http', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'reqtimeout : 30,', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'resurrectime : 10,', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'rewritelocation : enabled', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'status : up', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'vip : 192.168.1.252', 'Category': 'params','Role': 'Masinfo' },
    { 'Name': 'vport : 54', 'Category': 'params','Role': 'Masinfo' },
  
    { 'Name': 'List farms', 'Category': 'description','Role': 'Masinfo' },
    
    { 'Name': 'backends', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'farmguardian : null', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'httpsb : false', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'id : service1', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'leastresp : false', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'persistence', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'redirect', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'redirecttype', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'sessionid', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'ttl : 120', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'urlp', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'vhost', 'Category': 'services', 'Role': 'Masinfo' },
  
    { 'Name': 'id : 0', 'Category': 'backends', 'Role': 'Otro' },
    { 'Name': 'ip : 192.168.1.21', 'Category': 'backends', 'Role': 'Otro' },
    { 'Name': 'port : 50', 'Category': 'backends', 'Role': 'Otro' },
    { 'Name': 'status : "up', 'Category': 'backends', 'Role': 'Otro' },
    { 'Name': 'timeout : 1', 'Category': 'backends', 'Role': 'Otro' },
    { 'Name': 'weight : null', 'Category': 'backends', 'Role': 'Otro' }
  ];
  /*public farm: object[] = [
    {
      'farm1': [
        {
          "description" : "List farm farm1",
          "params" : {
             "contimeout" : 20,
             "error414" : "Request URI is too long.",
             "error500" : "An internal server error occurred. Please try again later.",
             "error501" : "This method may not be used.",
             "error503" : "The service is not available. Please try again later.",
             "httpverb" : "MSRPCext",
             "listener" : "http",
             "reqtimeout" : 30,
             "restimeout" : 45,
             "resurrectime" : 10,
             "rewritelocation" : "enabled",
             "status" : "up",
             "vip" : "192.168.1.252",
             "vport" : 54
          },
          "services" : [
             {
                "backends" : [
                   {
                      "id" : 0,
                      "ip" : "192.168.1.211",
                      "port" : 50,
                      "status" : "up",
                      "timeout" : 1,
                      "weight" : null
                   }
                ],
                "farmguardian" : null,
                "httpsb" : "false",
                "id" : "service1",
                "leastresp" : "false",
                "persistence" : "",
                "redirect" : "",
                "redirecttype" : "",
                "sessionid" : "",
                "ttl" : 120,
                "urlp" : "",
                "vhost" : ""
             }
          ]
       }
      ]
    }
  ];*/

  json (){
    return this.farm;
  }
  constructor() { 
    
  }
}
