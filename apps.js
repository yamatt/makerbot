module.exports = function (app_list, db) {

    this.load = function(app_list, db) {
        var apps = [];
        app_list.forEach(function (app_name) {
            var app = require(__dirname + "/apps/" + app_name)(db);
            apps.push(app);
        });
        this.apps = apps;
    }
    
    this.reload = function (app_list, db) {
        throw "Not yet implemented."
    }
    
    this.load(app_list, db);
    return this;
}
