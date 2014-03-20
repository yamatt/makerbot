module.exports = {
    name: "freenode",
    config: {
        server: "chat.freenode.net",
        port: 6667,
        debug: false,
        showErrors: false,
        autoRejoin: true,
        autoConnect: true,
        secure: false,
        selfSigned: false,
        certExpired: false,
        floodProtection: false,
        floodProtectionDelay: 1000,
        sasl: false,
        stripColors: false,
        channelPrefixes: "&#",
        messageSplit: 512,
    },
    authentication: function(client) {
        // function called when client wants to authenticate
        client.say("NickServ", "identify " + this.nick + " " + this.password);
    }
}
