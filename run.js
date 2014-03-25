var Config = require("./config"),
    Apps = require("./apps").apps,
    Database = require("./db"),
    Servers = require("./connections").Connections,
    nopt = require("nopt"),
    path = require("path");
    
function get_args() {
    var knownOpts = {
        "config" : path
    }

    return nopt(knownOpts)
}

var args = get_args();

var config = Config(args.config);

var db = Database(config.database);

var apps = Apps(config.apps, db);

Servers(config.servers, apps, function(servers) {
    servers.connect();
});


