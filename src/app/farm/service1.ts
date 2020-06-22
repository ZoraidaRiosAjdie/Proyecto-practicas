/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1/services/service1 */
export const VARIABLES1  : object = {
    "description" : "Get services of a farm",
    "params" : {
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
 }
 