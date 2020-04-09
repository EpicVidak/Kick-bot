const Discord = require('discord.js');
const {prefix, token} = require('./auth.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if(message.content.startsWith('${prefix}poni')){
        message.channel.send("!p https://www.youtube.com/watch?v=1ejz1V4OIH0")
    }    
})

client.login(token);