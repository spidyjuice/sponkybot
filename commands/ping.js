module.exports = {
    name: 'ping',
    aliases: ['pong','hello', 'hi','fucking'],
    description: "this is a ping command I guess",
    execute(client, message, cmd, args, Discord){
        if (cmd === 'ping') {
            message.channel.send('pong~~~');
        } else if (cmd === 'pong') {
            message.channel.send('ping~~~');
        } else if (cmd === 'hello' || cmd === 'hi') {
        message.channel.send('hello!!');
        } else if (cmd === 'fucking' && args[0] === 'based') {
        message.channel.send('and red pilled')
        }
    }
}