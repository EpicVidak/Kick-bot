const discord = require('discord.js');
const auth = require('./auth.json');

const bot = new discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
})

function payingRespect (guildMember) {
    const payingRespectNick = 'Paying respect...'
    let currentNick = guildMember.nickname;
    if (currentNick === payingRespectNick) 
        return;

    guildMember.edit({mute: true});
    guildMember.setNickname(payingRespectNick);
    setTimeout(() => {
        guildMember.edit({mute: false})
        guildMember.setNickname(currentNick);
    }, 5 * 1000);
}

bot.on('message',(msg) => {
    console.log(msg.content);
    if (msg.content === `${auth.prefix}ping`) {
        // msg.channel.send('pong');
        console.log(msg);
    }
    if (msg.content === 'X') {
        msg.channel.send(`${msg.author.username} is doubting you `);
    }
    if (msg.content === 'F') {
        // magicnu llinju koda koja muteuje msg.author
        const guildMember = msg.member;

        payingRespect(guildMember);
        guildMember.send('hello!');
        // let voiceStates = new discord.VoiceState(msg.guild)
        // voiceStates.setMute(true);
    }
    if (msg.content.includes(`${auth.prefix}kick`)) {
        // console.log(msg);
        let mention = msg.mentions.users.first();
        console.log(mention);
        
        if (mention) {
            msg.channel.send(`Why do you want me to kick "${mention.toString()}", are you that salty?`);
        } else {
            msg.channel.send(`If you don't specify who to kick, i swear ill kick you ${msg.member.nickname}`);
        }
    }
    checkMessage(msg);
    
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