const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./auth.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const songs = ['poni','hasl','onomoje','udjiuvodu','idegas','bruh', 'omegalul', 'esports'];
const rawCommands = ['X', 'F', '69'];
function checkForRawMessage(message) {
    if (rawCommands.indexOf(message.content) !== -1) {
        try {
            let command = message.content.toLowerCase();
            if(message.content == 69){
                command = 'sixnine';
            }
            client.commands.get(command).execute(message);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }

}

client.on('ready', () => {
    console.log('Ready!');
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {

    checkForRawMessage(message);

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/); // array of all secndary arguments after first, etc: --poni 1 13 ('poni' is command and '1' and '13' are arguments)
    const command = args.shift().toLowerCase();// single string of that is first arument, etc: --poni 1 ('poni' is command)
    if(songs.indexOf(command) !== -1){
        let songData = {
            songName: command,
            arguments: args 
            // first argument is volume (0.1 - 4),5 second is disconnectTimer (integer) seperated by spaces
            // if command is bruh then volume and disconnect timer are overwritten
        }
        client.commands.get('playsong').execute(message, songData);
        return;
    };

    if (!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
})

// client.on("typingStart", function(channel, user){
//     console.log(user);
//     channel.send(`${user.tag} has started typing`);
// });

client.login(token);


//TODO: djokala( random @tvoja keva)
//TODO: it is what is is
//TODO: omigalul
//TODO: can enter voice ur not in
//TODO: gl in esports
//TODO: oof?

//  S)ssss  T)tttttt  O)oooo  P)ppppp                                      
// S)    ss    T)    O)    oo P)    pp                                     
//  S)ss       T)    O)    oo P)ppppp                                      
//      S)     T)    O)    oo P)                                           
// S)    ss    T)    O)    oo P)                                           
//  S)ssss     T)     O)oooo  P)                                           
                                                                        
                                                                        
// E)eeeeee D)dddd   I)iiii T)tttttt N)n   nn I)iiii N)n   nn   G)gggg     
// E)       D)   dd    I)      T)    N)nn  nn   I)   N)nn  nn  G)          
// E)eeeee  D)    dd   I)      T)    N) nn nn   I)   N) nn nn G)  ggg      
// E)       D)    dd   I)      T)    N)  nnnn   I)   N)  nnnn G)    gg     
// E)       D)    dd   I)      T)    N)   nnn   I)   N)   nnn  G)   gg     
// E)eeeeee D)ddddd  I)iiii    T)    N)    nn I)iiii N)    nn   G)ggg      
                                                                        
                                                                        
//  M)mm mmm    A)aa    S)ssss  T)tttttt E)eeeeee R)rrrrr                  
// M)  mm  mm  A)  aa  S)    ss    T)    E)       R)    rr                 
// M)  mm  mm A)    aa  S)ss       T)    E)eeeee  R)  rrr                  
// M)  mm  mm A)aaaaaa      S)     T)    E)       R) rr                    
// M)      mm A)    aa S)    ss    T)    E)       R)   rr                  
// M)      mm A)    aa  S)ssss     T)    E)eeeeee R)    rr                 
                                                                        
                                                                        
// W)      ww H)    hh I)iiii L)       E)eeeeee                            
// W)      ww H)    hh   I)   L)       E)                                  
// W)  ww  ww H)hhhhhh   I)   L)       E)eeeee                             
// W)  ww  ww H)    hh   I)   L)       E)                                  
// W)  ww  ww H)    hh   I)   L)       E)                                  
//  W)ww www  H)    hh I)iiii L)llllll E)eeeeee                            
                                                                        
                                                                        
// B)bbbb   R)rrrrr    A)aa   N)n   nn   C)ccc  H)    hh E)eeeeee  S)ssss  
// B)   bb  R)    rr  A)  aa  N)nn  nn  C)   cc H)    hh E)       S)    ss 
// B)bbbb   R)  rrr  A)    aa N) nn nn C)       H)hhhhhh E)eeeee   S)ss    
// B)   bb  R) rr    A)aaaaaa N)  nnnn C)       H)    hh E)            S)  
// B)    bb R)   rr  A)    aa N)   nnn  C)   cc H)    hh E)       S)    ss 
// B)bbbbb  R)    rr A)    aa N)    nn   C)ccc  H)    hh E)eeeeee  S)ssss  
                                                                        
                                                                        
//   A)aa   R)rrrrr  E)eeeeee                                              
//  A)  aa  R)    rr E)                                                    
// A)    aa R)  rrr  E)eeeee                                               
// A)aaaaaa R) rr    E)                                                    
// A)    aa R)   rr  E)                                                    
// A)    aa R)    rr E)eeeeee                                              
                                                                        
                                                                        
//   A)aa     C)ccc  T)tttttt I)iiii V)    vv E)eeeeee                     
//  A)  aa   C)   cc    T)      I)   V)    vv E)                           
// A)    aa C)          T)      I)   V)    vv E)eeeee                      
// A)aaaaaa C)          T)      I)    V)  vv  E)                           
// A)    aa  C)   cc    T)      I)     V)vv   E)                           
// A)    aa   C)ccc     T)    I)iiii    V)    E)eeeeee                     
                                                                        
                                                                        
// T)tttttt Y)    yy                                                       
//    T)     Y)  yy                                                        
//    T)      Y)yy                                                         
//    T)       Y)                                                          
//    T)       Y)                                                          
//    T)       Y)                                                          
                                                                        
                                                                        
// U)    uu            U)    uu                                            
// U)    uu            U)    uu                                            
// U)    uu w)      WW U)    uu                                            
// U)    uu w)  WW  WW U)    uu                                            
// U)    uu w)  WW  WW U)    uu                                            
//  U)uuuu   w)WW WWW   U)uuuu                                             
                                                                        
                                                                        