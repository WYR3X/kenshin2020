const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

var mutelirolu = "kenshin-mute" //MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...

module.exports.run = async (bot, message, args) => {

  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(`<:kenshin_hayir:726170425779814413> Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`<:kenshin_hayir:726170425779814413> Yetkili bir kişiyi muteleyemem! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`<:kenshin_hayir:726170425779814413> Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)

  await(mutekisi.addRole(muterol.id));
  message.reply(`<:kenshin_evet:726170369379139675> <@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca mutelendi!`);

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<:kenshin_evet:726170369379139675> <@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: "mute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar muteler.",
    usage: "mute @kullanıcı 1sn-1dk-1sa-1g"
  };