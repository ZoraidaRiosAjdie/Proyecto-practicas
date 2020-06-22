/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1/services/service3 */
export const VARIABLES3  : object = {
    "description" : "Get services of a farm",
    "params" : {
       "backends" : [
          {
             "id" : 0,
             "ip" : "192.168.1.200",
             "port" : 444,
             "status" : "up",
             "timeout" : 4,
             "weight" : 4
          }
       ],
       "farmguardian" : null,
       "httpsb" : "false",
       "id" : "service3",
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
 