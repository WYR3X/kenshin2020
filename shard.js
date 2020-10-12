const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');

const scarew = new Discord.ShardingManager('bot.js', { //Main Dosya

    totalShards: "auto",
/////////////////////////////////////////////////////////////////////////////////////////
    token :  "NzE4MzgzNjc2MTI3MzEzOTQw.XtoE7w.bhPWrvPuNE1sEhFVChQtOAVWYE8"//TOKEN
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID'li Shard Başladı!`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);