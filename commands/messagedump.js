module.exports = {
    name: 'messagedump',
    aliases: ['dump'],
    description: "dump entire message data",
    execute(client, message, cmd, args, Discord){
        message.channel.send('```' + message.array.toString() + '```');
    }
}