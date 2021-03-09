module.exports = {
    name: 'ls',
    aliases: ['commands', 'cmds', 'help'],
    description: "this is a ping command I guess",
    execute(client, message, cmd, args, Discord){
        //commandlist= for(const file of commandFiles) {
        //  print(command.name)
        //  client.commands.set(command.name, command);
        //}
        //message.channel.send('these are my commands!:','```',client.commands,'```');
        message.channel.send(commands.name);
    }
}