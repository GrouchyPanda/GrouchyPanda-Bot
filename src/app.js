const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame("doing robot things, beep boop");
});

client.on("message", (message) => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	switch (command) {
		case "ping":
			message.channel.send("pong!");
			break;
		case "hello":
			message.channel.send("Hello " + message.author);
			break;
		case "help":
			message.channel.send("Pshh, " + message.author + " out here needing help like a dummy...");
			break;
		default:
			message.channel.send("Command not recognized. Please type !help to see my available commands.");
			break;
	}
});

client.login(config.token);
