/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1/services/service2 */
export const VARIABLES2  : object = {
    "description" : "Get services of a farm",
    "params" : {
       "backends" : [
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
       ],
       "farmguardian" : null,
       "httpsb" : "false",
       "id" : "service2",
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
 