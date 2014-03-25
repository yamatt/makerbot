module.exports = function (app_list, db) {

    this.load = function(app_list, db) {
        this.apps = [];
        app_list.forEach(function (app_name) {
            var app = require(__dirname + "/apps/" + app_name)(db);
            this.apps.push(app);
        }, this);
    }
    
    this.reload = function (app_list, db) {
        throw "Not yet implemented."
    }
    
    this.load(app_list, db);
    return this;
}
