const fs = require('fs');
module.exports = {
    name: 'fsplay',
    aliases: ['fsp'],
    description: "TODO play an audio file from my file system",
    execute(client, message, cmd, args, Discord){
        message.channel.send('this command is a todo, and is foreseeably impossible under the current technological constraints.');
    //    const ascii = fs.readFileSync('./art/spunky.ascii');
    //    message.channel.send('```' + ascii + '```');
    }
}