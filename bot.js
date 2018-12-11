const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'

const developers = ["491531826829983755","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
