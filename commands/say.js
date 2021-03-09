module.exports = {
    name: 'say',
    aliases: [],
    description: "I'll repeat what you tell me to say!",
    execute(client, message, cmd, args, Discord){
        var say = ''
        for(word of args){
            var say = `${say} ${word}`;
        }
        message.channel.send(say);
    }
}