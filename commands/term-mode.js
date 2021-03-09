module.exports = {
    name: 'term-mode',
    aliases: [],
    description: "terminal mode test",
    execute(client, message, cmd, args, Discord){
        message.channel.send('pong~~~');
    }
}