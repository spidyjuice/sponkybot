const fs = require('fs');
var {prefix} = require('../config.json');
updatestatus = require('./updatestatus.js');
module.exports = {
    name: 'prefix',
    aliases: ['pre', 'pronoun', 'pronouns'],
    description: "change my command prefix",
    execute(client, message, cmd, args, Discord){
        //if(!args[0]) {
        //    message.channel.send("please don't supply me with an empty prefix!!!");
        //    return;
        //}

        //the entire config file has to be read, entry modified, and then entire thing saved again.
        const config_hex = fs.readFileSync('./config.json');
        const config_json = JSON.parse(config_hex);
        config_json['prefix'] = args[0];
        config_string = JSON.stringify(config_json, null, 2);
        fs.writeFileSync('./config.json', config_string);
        var prefix = config_json['prefix'];

        message.channel.send('ok, my prefix is now ' + config_json['prefix'] + '!');
    },
    
}