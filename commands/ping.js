module.exports = {
    name: 'ping',
    aliases: ['pong','hello', 'hi','fucking', 'ily', 'based', "im", ],
    description: "this is a ping command I guess",
    execute(client, message, cmd, args, Discord){
        console.log("I'm in");
        var args_string = args.toString().replace('\,',' ');
        if(!args_string == '') args_string = ' ' + args_string;
        console.log(cmd, args_string);
        switch (cmd + args_string) {
            case "ping":
                message.channel.send('pong~~~');
                break;
            case "pong":
                message.channel.send('ping~~~');
                break;
            case "hello":
            case 'hi':
                message.channel.send('hello!!');
                break;
            case 'fucking based':
                //var atsign = String('<@!' + message.client.user.id + '>');
                //console.log(atsign);
                var pill = [
                    'black',
                    'blue',
                    'brown',
                    'green',
                    'indigo',
                    'iron',
                    'red',
                    'white',
                    'tilde',
                    'woke',
                    'mud',
                    'gamer',
                    'fuck',
                    'god',
                    'animal',
                    'goth',
                    'anteater',
                    'loser',
                    '<@!' + message.client.user.id + '>',
                    'brick',
                    'alittlecringe',
                    'minecraftdiamonds',
                    'darkagehorrorpsychofuckinger',
                    'stupidmotherfucker'
                ];
                var rng = Math.floor(Math.random() * pill.length);
                message.channel.send('and ' + pill[rng] + 'pilled');
                break;
            case 'ily spunky':
            case "ily spunk":
            case "ily spunks":
            case "ily spunkz":
            case "ily spunkybot":
            case 'ily <@!' + client.user.id + '>':
                message.channel.send('I love you too! <3');
                break;
            case 'based':
                message.channel.send('based on what');
                break;
            case "im so glad hatsune miku made":
            case "im so glad Hatsune Miku made":
                console.log('im here');
                var made = [
                    'minecraft',
                    'rawest forest',
                    'nyancat'
                ];
                var rng = Math.floor(Math.random() * made.length);
                message.channel.send(made[rng]);
                break;
        }
    }
}