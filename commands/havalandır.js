const Discord = require('discord.js');
exports.run = function(client, message, args) {

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Hayır.");
      if(!args[0]) return message.channel.send("hayır");
      message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`${args[0]} mesaj temizlendi. Akira Ev hanımı olup sunucuyu havalandırdı.`).then(msg => msg.delete(2000));
    });

    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear','prune'],
  permLevel: 2
};

exports.help = {
  name: 'havalandır',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'havalandır <temizlenecek mesaj sayısı>'
};