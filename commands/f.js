function payingRespect (guildMember) {
    const payingRespectNick = 'Paying respect...'
    let currentNick = guildMember.nickname;
    if (currentNick === payingRespectNick) 
        return;

    try {
        setTimeout(() => {
            guildMember.edit({mute: false})
            guildMember.setNickname(currentNick);
        }, 5 * 1000);
        guildMember.edit({mute: true});
        guildMember.setNickname(payingRespectNick);
    } catch (error) {
        console.log(error.message);
    }
    
}

module.exports = {
    name: 'f',
    description: 'F!',
    execute(msg, args){
        const guildMember = msg.member;

        payingRespect(guildMember);
        // guildMember.send('hello!');
    },
}