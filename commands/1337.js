module.exports = {
    name: '1337',
    description: 'hacker time',
    execute(message, args){
        message.channel.send('Woah, we got a hackerman here');
        message.delete();
    },
}