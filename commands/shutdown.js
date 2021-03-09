module.exports = {
    name: 'shutdown',
    aliases: ['shutoff'],
    description: "I'll take a nap",
    execute(client, message, cmd, args, Discord){
        message.channel.send("this command doesn't actually work, sorry :(");
        //message.channel.send('bye bye!');
        //exit();
    }
}