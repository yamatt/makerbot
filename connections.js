var Client = require("irc").Client;

module.exports.Connection = function (config, apps, autoConnect) {
    config.autoConnect = autoConnect || false   // disable auto connect so that the apps have time to complete
    
    this.client = new Client(config.server, config.nick, config);
    this.config = config;
    apps.apps.forEach(function(app) {
        app.register(this.client, this.config);
    }, this);
    return this;
}

module.exports.Connections = function(server_configs, apps, cb) {
    this.connections = [];
    server_configs.forEach(function (server_config) {
        var connection = module.exports.Connection(server_config, apps);
        this.connections.push(connection);
    });
    
    this.connect = function () {
        this.connections.forEach(function(connection) {
            connection.client.connect();
        });
    }
    
    cb(this);
}
