const fs = require('fs');
module.exports = {
    name: 'updatestatus',
    aliases: [],
    description: "I will update my discord status",
    execute(client, Discord){
        var prefix = JSON.parse(fs.readFileSync('./config.json'))['prefix'];
        //console.log(client.user);
        client.user.setActivity(`w/ u! my pronouns are ${prefix}`, {type: 'PLAYING'});
    }
}