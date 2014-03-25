module.exports.app = function(db) {
    this.db = db;
    
    this.register = function(connection, config) {
        connection.addListener("registered", function() {
            config.authentication(connection);
        });
        connection.addListener("message", function(nick, to, text, message) {
            console.log(nick, to, text, message);
        });
        connection.addListener("pm", function(nick, text, message) {
            console.log(nick, text, message);
        });
    }
    
    return this;
}
