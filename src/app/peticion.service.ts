import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  public farm: object[] = [
    { 'Name': 'farm1', 'fillColor': '#3DD94A' },
  
    { 'Name': 'description', 'Category': 'farm1', 'fillColor': '#3DD94A'},
    { 'Name': 'params', 'Category': 'farm1', 'fillColor': '#3DD94A'},
    { 'Name': 'services', 'Category': 'farm1', 'fillColor': '#3DD94A'},
  
    { 'Name': 'contimeout : 20', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'error414 : Request URI is too long.', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'error500 : An internal server error occurred. Please try again later.",', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'error501 : This method may not be used.', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'error503 : "The service is not available. Please try again later.",', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'httpverb : "MSRPCext",', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'listener : http', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'reqtimeout : 30,', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'resurrectime : 10,', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'rewritelocation : enabled', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'status : up', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'vip : 192.168.1.252', 'Category': 'params','fillColor': '#3DD94A' },
    { 'Name': 'vport : 54', 'Category': 'params','fillColor': '#3DD94A' },
  
    { 'Name': 'List farms', 'Category': 'description','fillColor': '#3DD94A' },
    
    { 'Name': 'backends', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'farmguardian : null', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'httpsb : false', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'id : service1', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'leastresp : false', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'persistence', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'redirect', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'redirecttype', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'sessionid', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'ttl : 120', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'urlp', 'Category': 'services', 'fillColor': '#3DD94A' },
    { 'Name': 'vhost', 'Category': 'services', 'fillColor': '#3DD94A' },
  
    { 'Name': 'id : 0', 'Category': 'backends', 'fillColor': '#3DD94A' },
    { 'Name': 'ip : 192.168.1.21', 'Category': 'backends', 'fillColor': '#3DD94A' },
    { 'Name': 'port : 50', 'Category': 'backends', 'fillColor': '#3DD94A' },
    { 'Name': 'status : "up', 'Category': 'backends', 'fillColor': '#3DD94A' },
    { 'Name': 'timeout : 1', 'Category': 'backends', 'fillColor': '#3DD94A' },
    { 'Name': 'weight : null', 'Category': 'backends', 'fillColor': '#3DD94A' },
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
