const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./auth.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const songs = ['poni','hasl','onomoje','udjiuvodu','idegas','bruh'];



client.on('ready', () => {
    console.log('Ready!');
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/); // array of all secndary arguments after first, etc: --poni 1 13 ('poni' is command and '1' and '13' are arguments)
    const command = args.shift().toLowerCase();// single string of that is first arument, etc: --poni 1 ('poni' is command)
   
    if(songs.indexOf(command) !== -1){
        client.commands.get('playSong').execute(message, args);
        return;
    };

    if (!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
})


function checkMessage (msg) {
    if (msg.content === `${auth.prefix}bruh`) {
        if (msg.member.voice.channel) {
            playSong(msg, './songs/bruh.mp3', 3);
            setTimeout(() => {
                msg.member.voice.channel.leave();
            }, 2000);
        }
    }
    if (msg.content === `${auth.prefix}idegas`) {
        if (msg.member.voice.channel) {
            playSong(msg, './songs/idegas.mp3');
        }
    }
    if (msg.content === `${auth.prefix}poni`) {
        if (msg.member.voice.channel) {
            playSong(msg, './songs/poni.mp3');
        }
    }
    if (msg.content === `${auth.prefix}udjiuvodu`) {
        if (msg.member.voice.channel) {
            playSong(msg, './songs/udjiUVodu.mp3');
        }
    }
    if (msg.content === `${auth.prefix}hasl`) {
        if (msg.member.voice.channel) {
            playSong(msg, './songs/hasl.mp3');
        }
    }
}


async function playSong(msg, songPath, volume) {
    volume = volume ? volume : 0.4;
    let conn = await msg.member.voice.channel.join();
    await conn.play(`${songPath}`, { volume });
}

// bot.on("typingStart", function(channel, user){
//     console.log(user);
//     channel.send(`${user.tag} has started typing`);
// });

bot.login(auth.token);