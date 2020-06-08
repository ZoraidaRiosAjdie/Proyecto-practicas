import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  public farm: object[] = [
    { 'Name': 'farm1', 'Role': 'Principal'},
    
    { 'Name': 'Global', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'IPDS', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'services', 'Category': 'farm1', 'Role': 'Secundario'},
  
    { 'Name': 'contimeout : 20 \n error414 : Request URI is too long.\n error500 : An internal server error occurred. Please try again later.\n error501 : This method may not be used.\nerror503 : "The service is not available. Please try again later.\n httpverb : "MSRPCext\n listener : http\n reqtimeout : 30\n resurrectime : 10\n rewritelocation : enabled\n status : up\n vip : 192.168.1.252\n vport : 54', 'Category': 'IPDS','Role': 'MasinfoB' },
  
    { 'Name': 'List farms', 'Category': 'Global','Role': 'Masinfo' },
    
    { 'Name': 'backends: [\nid : 0\nip : 192.168.1.21\nport : 50\nstatus : up\ntimeout : 1\nweight : null\n] \nfarmguardian : null\n httpsb : false\n id : service1\n leastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 120\n urlp\n vhost', 'Category': 'services', 'Role': 'Masinfo' },

    
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
