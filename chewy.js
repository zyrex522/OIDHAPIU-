const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
if ((new Date().getTime() - start) > milliseconds){
break;
    }
  }
}

///////////////////////////////////// J4J MAIN /////////////////////////////////////

const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

///////////////////////////////////// J4J READY /////////////////////////////////////

client.on('ready', () => {
        console.log(`Discord'a ${client.user.username} ismi ile giriş yaptım!`);
});

///////////////////////////////////// J4J MESSAGE /////////////////////////////////////

let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {

        let leise = await data.get(msg.author.id)
        
        if (leise === 1) {
        } else {
          
          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
           msg.channel.startTyping();
          await sleep(5500) // MESAJIN GİDECEĞİ SÜRE
          await msg.channel.send("1. MESAJ")
          await msg.channel.stopTyping();

          await sleep(7000) // MESAJIN GİDECEĞİ SÜRE
          msg.channel.startTyping();
          await msg.channel.send("2. MESAJ")
          await msg.channel.stopTyping();

          await sleep(7000) // MESAJIN GİDECEĞİ SÜRE
          await msg.channel.send("3. MESAJ")
          await msg.channel.stopTyping(); 
      }
      }
    }
  }
})

///////////////////////////////////// J4J CHANNEL ID /////////////////////////////////////

client.on("guildCreate", chewy => {

  chewy });

client.on("ready", () => {
      setInterval(() => {
       let chewy = client.channels.cache.get("J4J KANAL ID") // J4J YAPACAĞI KANAL ID

       chewy.send("**j4j dm**")

      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let chewy = client.channels.cache.get("J4J KANAL ID") // J4J YAPACAĞI KANAL ID ( İSTERSENİZ SİLEBİLİRSİNİZ )

       chewy.send("**j4j dm**")

      }, 30000);
})

///////////////////////////////////// TOKEN /////////////////////////////////////

client.login(ayarlar.token)

///////////////////////////////////// TOKEN END /////////////////////////////////////