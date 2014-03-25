module.exports = {
    name: "freenode",
    server: "chat.freenode.net",
    port: 6667,
    debug: false,
    showErrors: false,
    autoRejoin: true,
    autoConnect: false,
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: false,
    floodProtectionDelay: 1000,
    sasl: false,
    stripColors: false,
    channelPrefixes: "&#",
    messageSplit: 512,
    authentication: function(client) {
        // function called when client wants to authenticate
        // should verify nickserv first
        console.log("Authenticating");
        client.say("NickServ", "identify " + this.nick + " " + this.password);
        // kick off anything with my nick and change nick
    }
}
