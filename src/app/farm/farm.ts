export const VARIABLE  : Array <any> = [
    { 'Name': 'farm1', 'Role': 'Principal'},
    
    { 'Name': 'Global', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'IPDS', 'Category': 'farm1', 'Role': 'Secundario'},
    { 'Name': 'services', 'Category': 'farm1', 'Role': 'Secundario'},
  
    { 'Name': 'contimeout : 20 \n error414 : Request URI is too long.\n error500 : An internal server error occurred. Please try again later.\n error501 : This method may not be used.\nerror503 : "The service is not available. Please try again later.\n httpverb : "MSRPCext\n listener : http\n reqtimeout : 30\n resurrectime : 10\n rewritelocation : enabled\n status : up\n vip : 192.168.1.252\n vport : 54', 'Category': 'IPDS','Role': 'MasinfoB' },
  
    { 'Name': 'List farms', 'Category': 'Global','Role': 'Masinfo' },

    { 'Name': 'service1\nnfarmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 120\n urlp\n vhost\nbackends: [\nid : 0\nip : 192.168.1.21\nport : 50\nstatus : up\ntimeout : 1\nweight : null\n]', 'Category': 'services', 'Role': 'Masinfo' },

    { 'Name': 'service2\nnfarmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 120\n urlp\n vhost\nbackends: [\nid : 0\nip : 192.168.1.21\nport : 50\nstatus : up\ntimeout : 1\nweight : null\n]\nbackends: [\nid : 0\nip : 192.168.1.21\nport : 50\nstatus : up\ntimeout : 1\nweight : null\n]\nbackends: [\nid : 0\nip : 192.168.1.21\nport : 50\nstatus : up\ntimeout : 1\nweight : null\n]', 'Category': 'services', 'Role': 'Masinfo' },
    { 'Name': 'service3\nnfarmguardian : null\nhttpsb : false\nleastresp : false\n persistence\n redirect\n redirecttype\n sessionid\n ttl : 120\n urlp\n vhost\nbackends: [\nid : 0\nip : 192.168.1.21\nport : 50\nstatus : up\ntimeout : 1\nweight : null\n]', 'Category': 'services', 'Role': 'Masinfo' }
       
]