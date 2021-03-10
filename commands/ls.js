module.exports = {
    name: 'ls',
    aliases: ['commands', 'cmds', 'help'],
    description: "this command is wip",
    execute(client, message, cmd, args, Discord){
        message.channel.send('this command is broken and WIP');
        console.log(client.commands.name[0]);
        console.log(client.commands[0].name);
        console.log('ls cmd initiated');
        var cmdlist = '';
        var i = 0;
        console.log('cmdlist var initiated');
        for(const command of client.commands) {
            console.log('for loop happeningggg');
            cmdlist = `${cmdlist}` + '\n' + client.commands[i].name + ": " + client.commands[i].description;
            i++;
            console.log(cmdlist);
        };
        console.log('done');
        //commandlist= for(const file of commandFiles) {
        //  print(command.name)
        //  client.commands.set(command.name, command);
        //}
        //message.channel.send('these are my commands!:','```',client.commands,'```');
        message.channel.send('```' + cmdlist + '```');
    }
}