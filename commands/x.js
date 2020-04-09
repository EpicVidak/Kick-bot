
module.exports = {
    name: 'x',
    description: 'X!',
    execute(message, args){
        message.channel.send(`${message.member.nickname} is doubting you `);
    },
}