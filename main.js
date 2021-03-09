const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

//var {prefix,token,} = require('./config.json');
var {prefix, token} = require('./config.json');

//client.once('ready', () => console.log('spunkybot is online~') );

//client.off('ready', () => console.log('disconnected from server!!!!') );

['command_handler', 'event_handler'].forEach (handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

client.login(token);