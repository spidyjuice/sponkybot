const fs = require('fs');
module.exports = {
    name: 'ascii',
    aliases: ['printascii'],
    description: "print my ascii art",
    execute(client, message, cmd, args, Discord){
        const ascii = fs.readFileSync('./art/spunky.ascii');
        message.channel.send('```' + ascii + '```');
    }
}