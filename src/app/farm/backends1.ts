/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1/services/servic1/backends */
export const VARIABLEB1 : object = 
{
    "description" : "List service backends",
    "params" : [
       {
          "id" : 0,
          "ip" : "192.168.1.211",
          "port" : 50,
          "status" : "up",
          "timeout" : 1,
          "weight" : null
       }
    ]
 }
 