module.exports = {
    name: 'devil',
    aliases: ['satan'],
    description: "this is a ping command I guess",
    execute(client, message, args, cmd, Discord){
        message.channel.send('pong~~~');
    }
}