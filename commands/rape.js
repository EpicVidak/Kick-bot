module.exports = {
    name: 'rape',
    description: 'a command to earrape someone in a different channel',
    execute(message, args){
        
        const member = message.guild.member(args);
        const connection = member.voice.channel.join();
        
    },
}