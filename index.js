const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
let token = auth.token;

client.login(token);