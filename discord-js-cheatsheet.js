const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const TOKEN = "token-here";
const PREFIX = "prefix";

client.on('ready', ready => {
  console.log("ready");
  client.user.setActivity('music', { type: 'LISTENING' });
});

client.on('guildMemberAdd', newuser => {
  console.log("new user");
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(`${PREFIX}ping`)) {
    message.channel.send("pong");
  }
  console.log(`${message.author.username} ${guild.name}`);
});

client.on("typingStart", function(channel, user){
    console.log(`${user.tag} has started typing`);
});

client.on("typingStop", function(channel, user){
    console.log(`${user.tag} has stopped typing`);
});

client.on("guildCreate", function(guild){
    console.log(`the client joins a guild`);z
})

client.login(TOKEN);
