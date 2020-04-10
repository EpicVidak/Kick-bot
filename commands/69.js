module.exports = {
    name: '69',
    description: 'nice addon',
    execute(message, args){
        message.reply('nice.');
        message.delete();
    },
}