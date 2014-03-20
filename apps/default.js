module.exports = function(db) {
    this.db = db;
    
    this.register = function(connection, config) {
        connection.addListener("registered", function() {
            config.authentication(connection);
        });
    }
    
    return this;
}
