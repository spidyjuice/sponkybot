const fs = require('fs');
module.exports = {
    name: 'git',
    aliases: ['github'],
    description: "print my git repository",
    execute(client, message, cmd, args, Discord){

        const git_config = fs.readFileSync('./.git/config', 'ascii');
        var git_url = git_config.slice(git_config.indexOf('git\@') + 4).split('\n')[0].replace(':','/');
        message.channel.send('I was born at... \n' + 'https://www.' + git_url);
    }
}