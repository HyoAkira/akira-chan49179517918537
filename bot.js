const Discord = require("discord.js"); // use discord.js

const BOT_TOKEN = "process.env.BOT_TOKEN" // bot's token
const PREFIX = ">" // bot's prefix
var prefix = ">"

var eightball = [ // sets the answers to an eightball
    "Evet!",
    "Hayır...",
    "belki?",
    "muhtemelen",
    "Ben öyle düşünmüyorum.",
    "asla!",
    "denemelisin...",
    "Sana bağlı!",
]

var bot = new Discord.Client(); // sets Discord.Client to bot

bot.on('ready', () => {
    console.log(`BOT: Aktif!`);
    console.log(`BOT: ${bot.user.username} ismi ile giriş yapıldı!`);
    bot.user.setGame(prefix + 'yardım');
    console.log(`BOT: Oyun ismi ayarlandı!`);
    bot.user.setStatus("dnd");
    console.log(`BOT: Mesaj gönderildi!`);
    console.log("BOT: Şu an " + bot.channels.size + " adet kanala ve " + bot.guilds.size + " adet sunucuya hizmet veriliyor!");
  });

  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  
  
bot.on("message", function(message) { // when a message is sent
    if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

    if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore

    var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
    var mutedrole = message.guild.roles.find("name", "muted");

    if (command == "help") { // creates a command *help
        var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
            .setTitle("**List of Commands**\n") // sets the title to List of Commands
            .addField(" - help", "Displays this message (Correct usage: *help)") // sets the first field to explain the command *help
            .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
            .addField(" - ping", "Tests your ping (Correct usage: *ping)") // sets the second field to explain the command *ping
            .addField(" - cookie", "Sends a cookie to the desired player! :cookie: (Correct usage: *cookie @username)") // sets the third field to explain the command *cookie
            .addField(" - 8ball", "Answers to all of your questions! (Correct usage: *8ball [question])") // sets the field to the 8ball command
            .setColor(0xFFA500) // sets the color of the embed box to orange
            .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
        var embedhelpadmin = new Discord.RichEmbed() // sets a embed box to the var embedhelpadmin
            .setTitle("**List of Admin Commands**\n") // sets the title
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: *mute @username [reason])") // sets a field
            .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])") //sets a field
            .setColor(0xFF0000) // sets a color
            .setFooter("Ooo, an admin!") // sets the footer
        message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
        if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }

    if (command == "hakkında") { // creates the command *info
        message.channel.send("Merhaba! Benim adım Akira, sana yardımcı olmak için buradayım! Ben herkesin yardımcısı Hyosuke'nin sevgilisiyim! Eğer yardıma ihtiyacın olursa >yardım komutunu kullan :smile:") // gives u info
    }

    bot.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
    
        if (message.content.startsWith(prefix + 'ping')) {
            message.channel.sendMessage('Pong! Senin kalp ritmin `' + `${Date.now() - message.createdTimestamp}` + ' ms :heartbeat:`');
        }
    });

    if (command == "kurabiye") { // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " kurabiye ısmarlıyor. " + args[1].toString() + " kurabiyenin tadını çıkar! :cookie:" ) // sends the message saying someone has given someone else a cookie if someone mentions someone else
        else message.channel.send("Kime kurabiye ısmarlamak istersin? :cookie: (Örnek Kullanım: >kurabiye @kullanıcıadı)") // sends the error message if no-one is mentioned
    }
    
     if (command == "ramen") { // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " ramen ısmarlıyor. " + args[1].toString() + " ramenin tadını çıkar! :ramen:" ) // sends the message saying someone has given someone else a cookie if someone mentions someone else
        else message.channel.send("Kime ramen ısmarlamak istersin? :ramen: (Örnek Kullanım: >ramen @kullanıcıadı)") // sends the error message if no-one is mentioned
    }

    if (command == "akira") { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("Hmmm, Bana ne sormak istiyorsun? :rolling_eyes: (Doğru kullanım: Akira [soru])"); // if not, error
    }

    if (command == "yaz") { // creates command say
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Üzgünüm, beni pis işlerine alet edemezsin!");
        var sayMessage = message.content.substring(4)
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }

    
    if (command == "mute") { // creates the command mute
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Üzgünüm, bu komutu kullanabilecek kadar cool değilsin!"); // if author has no perms
        var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!mutedmember) return message.reply("Kullanıcıyı etiketlemeyi unuttun gibi!") // if there is no kickedmmeber var
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("Üyeyi susturamıyorum, avaz avaz bağırıyor!") // if memebr is an admin
        var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
        var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
        var mutereason = mutereason.join(" "); // joins the list kickreason into one line
        if (!mutereason) return message.reply("Neden ceza verdiğini bildirmek zorundasın, çakallık yapayım deme!") // if no reason
        mutedmember.addRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${mutedmember.user}susturulmuştur. Susturan kişi: ${message.author} Sebeb: ${mutereason}`); // sends a message saying he was kicked
    }

    if (command == "unmute") { // creates the command unmute
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sadece sevgilimin sözünü dinlerim :smile:"); // if author has no perms
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.reply("üyeyi etiketlemeyi unuttun. Benim mutemi kaldırmayacaksın heralde!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
    }

    if (command == "kick") { // creates the command kick
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!kickedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
        var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
        var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
        var kickreason = kickreason.join(" "); // joins the list kickreason into one line
        if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
        kickedmember.kick(kickreason) //if reason, kick
            .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
        message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`); // sends a message saying he was kicked
    }

});

// set message listener 
bot.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?RESET':
            resetBot(message.channel);
            break;

        // ... other commands
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.BOT_TOKEN));
}

// mesaj silme
bot.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'kullanıcıbilgim')
      if (msg.channel.type !== "group") {
          var Durum = msg.author.presence.status;
          var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
          var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
        const kullanicibilgimk = new Discord.RichEmbed()
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .setColor(Durm)
        .setTimestamp()
        .addField('Ad:', msg.author.username + '#' + msg.author.discriminator)
        .addField('ID:', msg.author.id)
        .addField('Kayıt tarihi:', msg.author.createdAt)
        .addField('Durum:', durm)
        .addField('Şu an oynadığı oyun:', msg.author.presence.game ? msg.author.presence.game.name : 'Şu an oyun oynamıyor')
        .addField('BOT mu?', msg.author.bot ? '\n Evet' : 'Hayır')
        console.log("!kullanıcıbilgim komutu " + msg.author.username + " tarafından kullanıldı.")
        return msg.channel.sendEmbed(kullanicibilgimk);
    }
  });
  
//snucu bilgi
bot.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
      if  (msg.channel.type === 'dm') {
        const ozelmesajuyarii = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
      msg.author.sendEmbed(ozelmesajuyarii); }
      if (msg.channel.type !== 'dm') {
        const sunucubilgi = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor(msg.guild.name, msg.guild.iconURL)
      .addField('Ad:', msg.guild.name)
      .addField('ID', msg.guild.id)
      .addField('Ana kanal:', msg.guild.defaultChannel)
      .addField('Bölge', msg.guild.region)
      .addField('Üye sayısı:', msg.guild.memberCount)
      .addField('Sahibi:', msg.guild.owner)
      .addField('Kanal sayısı:', msg.guild.channels.size)
      .addField('Oluşturulma tarihi:', msg.guild.createdAt)
      return  msg.channel.sendEmbed(sunucubilgi);
      }
    }
  });



// purge
if(command === "havalandır") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 1000)
      return message.reply("2 ile 1000 arasında bir sayı yazmalısın.");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Mesajları silemiyorum: ${error}`));
  };

// Bu olmak zorunda
bot.login(process.env.BOT_TOKEN);
