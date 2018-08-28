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
 if(command === "söyle") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

// Bu olmak zorunda
client.login(process.env.BOT_TOKEN);
