var Config = require("./config"),
    Apps = require("./apps"),
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

var servers = Servers(config.servers, apps);

servers.connections.forEach(function (connection) {
    connection.client.connect();
});
