const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
//DarkCode
module.exports.run = async (client, message, args) => {
  //DarkCode
   var başarılı = ['✅ ', '✓ '];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];
//DarkCode
   var başarısız = ['❌ ', '✖️ '];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  //DarkCode
let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.guild.channels.find(x => x.name === args.slice(0).join('-'))
if(!channel) return message.channel.send(x2 + ` Lütfen Kanal Etiketlemesi , İsmini Yaz , ID sini Yazma İşlemini Yap `)
//DarkCode
channel.clone(channel.name, true, true, "Kenshin").then(async klon => {
//DarkCode
channel.delete()
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position); 
//DarkCode
message.channel.send(x + ` ${klon.name} adlı Oda Yeniden Aktif Nuke İşlemi **Kenshin** Tarafından Gerçekleştirildi!`)})
}
//DarkCode
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  //DarkCode
exports.help = {
 name: 'nuke',
 description: '',
 usage: 'nuke '
}