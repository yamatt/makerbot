module.exports.app = function(db) {
    this.db = db;
    
    this.register = function(connection, config) {
        connection.addListener("error", function(msg) {
            console.log("error:", msg);
        });
    }
    
    return this;
}
