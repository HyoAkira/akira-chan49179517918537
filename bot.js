const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";
client.on('ready', () => {
    console.log('I am ready!');
});


// Akira Yenilmez
client.on('message', message => {
    if (message.content === 'akira') {
    	message.reply('beni mi deniyorsun? Ben yenilmezim.');
  	}
});


// pingim kaç

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {
    if (msg.channel.type !== "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':ping_pong: Pong!', 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(ozelmesajkontrol) }
      const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('Ping:', '**' + client.ping + '**') 
    return msg.author.sendEmbed(pingozel);
  }
});

// Söyle
 if (message.startsWith("say") == true) {//Check if the message send starts with "say"
    var newMessage = message.replace("say ", "");//Making a variable where "say " is removed
    bot.sendMessage({to: channelID, message:newMessage})//Send the new variable.
}

// Bu olmak zorunda
client.login(process.env.BOT_TOKEN);
