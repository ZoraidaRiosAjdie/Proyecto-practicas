/* curl -k -X GET -H "ZAPI_KEY: zoraida1630" https://192.168.1.252:444/zapi/v4.0/zapi.cgi/farms/farm1 */
export const VARIABLE  : object = {
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
     "status" : "needed restart",
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
     },
     {
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
     },
     {
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
     },
     {
        "backends" : [],
        "farmguardian" : null,
        "httpsb" : "false",
        "id" : "server1",
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