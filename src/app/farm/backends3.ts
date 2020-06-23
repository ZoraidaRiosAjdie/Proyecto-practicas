/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1/services/service3/backends */
export const VARIABLEB3 : object = 
{
    "description" : "List service backends",
    "params" : [
       {
          "id" : 0,
          "ip" : "192.168.1.200",
          "port" : 444,
          "status" : "up",
          "timeout" : 4,
          "weight" : 4
       }
    ]
 }
 