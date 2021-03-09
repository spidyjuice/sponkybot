const { groupEnd } = require('console');
const fs = require('fs');
const { stringify } = require('querystring');
const ascii = require('./ascii');
module.exports = {
    name: 'git',
    aliases: ['github'],
    description: "print my git repository",
    execute(client, message, cmd, args, Discord){

        const git_config = fs.readFileSync('./.git/config', 'ascii');
        //console.log(git_config);
        var git_url = git_config.slice(git_config.indexOf('git\@') + 4).split('\n')[0].replace(':','/');

        //for(const line of git_config) {
        //        if(line.match(/url = .*$/g)); {
        //            var git_url = line;
        //        console.log(git_url);
        //        }
        //}
        message.channel.send('I was born at... \n' + 'https://www.' + git_url);
        //message.channel.send(giturl);
    }
}