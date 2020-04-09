const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login('Njk3ODU4ODE5NzQ0ODU4MTIz.Xo9hYg.tgEj5wBKC4PU7PImzkhIVpmWVrQ');