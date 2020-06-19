export const VARIABLE  : Array <any> = [
    { 'Name': 'farm1', 'Role': 'Principal'},
    
    { 'Name': 'Global', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'IPDS', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'Services', 'Category': 'farm1', 'Role': 'Secundario'},
  
    { 'Name': ' - contimeout : 20 \n - error414 : Request URI is too long.\n - error500 : An internal server error occurred. Please try again later.\n - error501 : This method may not be used.\n - error503 : "The service is not available. Please try again later.\n - httpverb : "MSRPCext\n - listener : http\n - reqtimeout : 30\n - resurrectime : 10\n - rewritelocation : enabled\n - status : up\n - vip : 192.168.1.252\n - vport : 54', 'Category': 'IPDS','Role': 'MasinfoB' },
  
    { 'Name': 'List farms', 'Category': 'Global','Role': 'Masinfo' },

    { 'Name': 'service1', 'Category': 'Services','Role': 'Masinfo' },
    { 'Name': 'service2', 'Category': 'Services','Role': 'Masinfo' },
    { 'Name': 'service3', 'Category': 'Services','Role': 'Masinfo' },

    { 'Name': 'farmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 120\n urlp\n vhost', 'Category': 'service1', 'Role': 'Otro' },

    { 'Name': 'farmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 121\n urlp\n vhost', 'Category': 'service2', 'Role': 'Otro' },
    { 'Name': 'farmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 122\n urlp\n vhost', 'Category': 'service3', 'Role': 'Otro' }, 

    { 'Name': 'backends 0 : \n - ip : 192.168.1.21\n - port : 50\n - status : up\n - timeout : 1\n - weight : null', 'Category': 'farmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 120\n urlp\n vhost', 'Role': 'Otro' },
    { 'Name': 'backends 0 : \n - ip : 192.168.1.21\n - port : 50\n - status : up\n - timeout : 1\n - weight : null\n\nbackends 1 : \n - ip : 192.168.1.21\n - port : 50\n - status : up\n - timeout : 1\n - weight : null\nbackends 2 : \n - ip : 192.168.1.21\n - port : 50\n - status : up\n - timeout : 1\n - weight : null', 'Category': 'farmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 121\n urlp\n vhost', 'Role': 'Otro' },
    { 'Name': 'backends 0 : \n - ip : 192.168.1.21\n - port : 50\n - status : up\n - timeout : 1\n - weight : null\n\nbackends 1 : \n - ip : 192.168.1.21\n - port : 50\n - status : up\n - timeout : 1\n - weight : null', 'Category': 'farmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 122\n urlp\n vhost', 'Role': 'Otro' }
       
]
