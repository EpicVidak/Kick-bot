module.exports = {
    name: 'dc',
    description: 'to disconnect the bot',
    execute(message, args){
        message.channel.send(`${message.member.nickname} sayonara nigga `);
        message.delete();
        message.member.voice.channel.leave();
    },
}