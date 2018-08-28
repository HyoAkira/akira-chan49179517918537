const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";
client.on('ready', () => {
    console.log('I am ready!');
});

    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)

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

// bilgi
  if (command == "akira hakkında") {
        message.channel.send("Merhaba! Benim adım Akira ve bu sunucuda sana hizmet etmek için varım. Eğer bir yardıma ihtiyacın olursa >yardım komutu kullan. :olamaz:") // gives u info
    }

// Bu olmak zorunda
client.login(process.env.BOT_TOKEN);
