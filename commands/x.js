
module.exports = {
    name: 'X',
    description: 'X!',
    execute(message, args){
        message.channel.send(`${message.member.nickname} is doubting you `);
    },
}