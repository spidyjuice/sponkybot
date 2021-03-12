const fs = require('fs');
const alwaysping = require('../../alwaysping.js');

module.exports = (Discord, client, message) => {
    var prefix = JSON.parse(fs.readFileSync('./config.json'))['prefix'];
    if(prefix === undefined) prefix = '';
    console.log('#' + message.channel.name + '.' + message.author.username +': ' + message.content);
  
    if(message.content.startsWith(prefix) && !message.author.bot) {
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        const cmdexec = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

        //if(cmd) cmd.execute(client, message, args, Discord);

        try {
            console.log('parsing...');
            //console.log(client.user);
        cmdexec.execute(client, message, cmd, args, Discord);
        }
        catch (error) {
         console.log('command attempt failed');
        console.log(error);
        //message.reply('I dondt uderstand, something went wrong');
            try {
                console.log('doing alwaysping');
                alwaysping.execute(client, message, cmd, args, Discord);
            }
            catch (error) {
                console.log(error);
                console.log('alwaysping failed');
            }
        }
    }
    updatestatus.execute(client, Discord);
}