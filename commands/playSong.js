const songs = {
    'poni': './music/poni.mp3',
    'hasl': './music/haslhasl.mp3',
    'onomoje': './music/onomoje.mp3',
    'udjiuvodu': './music/onomoje.mp3',
    'idegas': './music/idegas.mp3',
    'bruh': './music/bruh.mp3'
}

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args){
        message.channel.send('Pong');
    },
}