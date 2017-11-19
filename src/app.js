const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
	if(!msg.content.startsWith(prefix) || message.author.bot) return;
	
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login(config.token);
