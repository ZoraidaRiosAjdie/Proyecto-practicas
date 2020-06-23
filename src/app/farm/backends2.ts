/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1/services/service2/backends */
export const VARIABLEB2: object = 
{
    "description" : "List service backends",
    "params" : [
       {
          "id" : 0,
          "ip" : "192.168.1.252",
          "port" : 444,
          "status" : "up",
          "timeout" : 2,
          "weight" : 2
       },
       {
          "id" : 1,
          "ip" : "192.168.1.251",
          "port" : 444,
          "status" : "up",
          "timeout" : null,
          "weight" : null
       },
       {
          "id" : 2,
          "ip" : "192.168.1.250",
          "port" : 444,
          "status" : "up",
          "timeout" : 8,
          "weight" : 5
       }
    ]
 }
 