var yaml = require('js-yaml'),
    fs   = require('fs'),
    _ = require("underscore");

module.exports = function(config_path) {
    config_path = config_path || "config.yaml";
    var base_config = yaml.safeLoad(
        fs.readFileSync(config_path, 'utf8')
    );
    
    this._extend_server_profiles = function (base_config) {
        base_config.servers.forEach(function (server) {
            if (server.profile) {
                server = _.extend(server, require(__dirname + "/servers/" + server.profile));
            }
        });
        return base_config
    }
    
    // pull in matching server config
    
    return this._extend_server_profiles(base_config);
}

