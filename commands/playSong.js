const songs = {
    'poni': './music/poni.mp3',
    'hasl': './music/hasl.mp3',
    'onomoje': './music/onomoje.mp3',
    'udjiuvodu': './music/udjiuvodu.mp3',
    'idegas': './music/idegas.mp3',
    'bruh': './music/bruh.mp3',
    'omegalul': './music/omegalul.mp3',
    'esports': './music/esports.mp3',
    'itis': './music/itis.mp3'
}

async function playSong(msg, options) {
    /*
        options ={
            songName, // string
            volume, // integer
            disconnectTimer, // integer (seconds)
        }
    */
    let volume = options.volume ? options.volume : 0.5;
    let songPath = options.songName;
    if (songPath === 'bruh' || songPath === 'esports') {
        options.disconnectTimer = 2.1;
        volume = 2;
    }
    if(songPath === 'itis'){
        options.disconnectTimer = 3.5;
        volume = 1;
    }
    if(songPath === 'omegalul'){
        options.disconnectTimer = 1.5;
        volume = 2;
    }
    if(songPath === 'idegas') {
        const idegasText = ':regional_indicator_i: :regional_indicator_d: :regional_indicator_e: :regional_indicator_g: :regional_indicator_a: :regional_indicator_s:';
        msg.reply(' u sure bud?');
        setTimeout(() => {
            message.channel.send(idegasText);
        }, 1500);
        msg.react('🇮')
            .then(() => msg.react('🇩'))
            .then(() => msg.react('🇪'))
            .then(() => msg.react('🇬'))
            .then(() => msg.react('🇦'))
            .then(() => msg.react('🇸'))
            .catch(() => console.error('some emoji failed to load'));
    }
    if(songPath === 'onomoje') {
        msg.reply(' ono tvoje?');
    }
    if (msg.member && msg.member.voice && msg.member.voice.channel){
        let conn = await msg.member.voice.channel.join();
        await conn.play(`${songs[songPath]}`, { volume });
        if (options.disconnectTimer) {
            setTimeout(() => {
                msg.member.voice.channel.leave();
            }, options.disconnectTimer * 1000);
        }
    }
}

module.exports = {
    name: 'playsong',
    description: 'plays a song that has custom command',
    execute(message, songData){

        let songName = songData.songName;
        let args = songData.arguments;
        
        let options = {
            songName: songName,
        }
        options.volume = args[0] ? Number(args[0]) : 0.5;
        if (options.volume > 3) options.volume = 3;
        if (options.volume < 0) options.volume = 0.1;

        options.disconnectTimer = (args[1]) ? Number(args[1]) : null;
        playSong(message, options)
    },
}
//Placeholder (pls dont delete)
/*
    🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿
*/ 