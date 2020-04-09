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
        let songData = {
            songName: command,
            arguments: args 
            // first argument is volume (0.1 - 4),5 second is disconnectTimer (integer) seperated by spaces
            // if command is bruh then volume and disconnect timer are overwritten
        }
        client.commands.get('playSong').execute(message, songData);
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


// client.on("typingStart", function(channel, user){
//     console.log(user);
//     channel.send(`${user.tag} has started typing`);
// });

client.login(token);