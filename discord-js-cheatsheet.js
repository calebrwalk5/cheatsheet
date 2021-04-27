const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const TOKEN = "token-here";
const PREFIX = "prefix";

client.on('ready', ready => {
  console.log("ready");
});

client.on('guildMemberAdd', newuser => {
  console.log("new user");
});

client.on('message', message => {
  if (message.content.startsWith(`${PREFIX}ping`)) {
    message.channel.send("pong");
  }
});

client.login(TOKEN);
