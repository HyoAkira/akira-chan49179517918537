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

// embed

client.on('message', message =&gt; {
if (message.content === 'embed') {
// Eğer mesaj "embed" ise...
let Embed = new Discord.RichEmbed() // Embed'i tanımladık.
.setAuthor("Yukarıdaki Beyazımsı Yazı")
.setDescription("Açıklama Mesajı")
.setColor("#RENKKODU") 
.setFooter("Alt yazı")
.setThumbnail("Küçük Resim Linki")
.setImage("Büyük Resim Linki")
.addField("Başlık", "Başlık Açıklaması")
.setTimestamp() //Tarih ve saat
 
// Kanala embedi gönder
message.channel.send(Embed)
  }
});


// Bu olmak zorunda
client.login(process.env.BOT_TOKEN);
