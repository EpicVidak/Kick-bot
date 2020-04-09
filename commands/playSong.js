const songs = {
    'poni': './music/poni.mp3',
    'hasl': './music/hasl.mp3',
    'onomoje': './music/onomoje.mp3',
    'udjiuvodu': './music/udjiuvodu.mp3',
    'idegas': './music/idegas.mp3',
    'bruh': './music/bruh.mp3'
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
    if (songPath === 'bruh') {
        options.disconnectTimer = 2;
        volume = 2;
    }
    let conn = await msg.member.voice.channel.join();
    await conn.play(`${songs[songPath]}`, { volume });
    if (options.disconnectTimer) {
        setTimeout(() => {
            msg.member.voice.channel.leave();
        }, options.disconnectTimer * 1000);
    }
}

module.exports = {
    name: 'playSong',
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