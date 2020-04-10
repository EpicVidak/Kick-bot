module.exports = {
    name: 'dc',
    description: 'to disconnect the bot',
    execute(message, args){
        message.member.voice.channel.leave();
    },
}