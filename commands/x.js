
module.exports = {
    name: 'x',
    description: 'X!',
    execute(message, args){
        message.channel.send(`${message.author.username} is doubting you `);
    },
}