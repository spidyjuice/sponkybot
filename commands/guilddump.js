module.exports = {
    name: 'guilddump',
    aliases: [],
    description: "dump entire message data",
    execute(client, message, cmd, args, Discord){
        if(args[0] == 'members'){
            console.log(message.guild.members);
            message.channel.send('guild members dumped to console');
            return;
        }
        console.log(message.guild);
        message.channel.send('guild dumped to console');
    }
}