
var appConf = {

    "httpPort" : 3001,
    "routes" : [
        
        "upload",
        "data",
        "users",
        "index"
    ],
    "log" : "./logs/",
    "sit":{

        "user" : "admin",
        "ps" : "admin"
    },
    "prd" : {
        
        "defaultAuth" : {

            "user" : "admin",
            "ps" : "admin"
        }

    }
};

module.exports = appConf;
