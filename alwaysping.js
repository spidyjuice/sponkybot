//accomomidation of girls who say hii since march 11 12021
module.exports = {
    name: 'alwaysping',
    aliases: [],
    description: "this is a ping command I'm sure'",
    execute(client, message, cmd, args, Discord){
        console.log("initiating alwaysping cmd");
        var ilyregex = new RegExp("ily \<\@\!" + client.user.id + "\>");
        console.log('ilyregex:' + ilyregex);
        
        var args_string = args.toString().replace(/\,/g,' ');
        if(!args_string == '') args_string = ' ' + args_string;
        console.log('testing: ' + cmd, args_string);

        switch (true) {
            //not all things can be regex :pensive:
            case /^pingg*$/.test(cmd + args_string):
                message.channel.send('pong~~~');
                break;
            case /^pongg*$/.test(cmd + args_string):
                message.channel.send('ping~~~');
                break;
            case /^helloo*$/.test(cmd + args_string):
            case /^hii*$/.test(cmd + args_string):
                message.channel.send('hello!!');
                break;
            case /fucking based.*/.test(cmd + args_string):
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
                    '<@!' + message.author.id + '>',
                    '<@!' + client.user.id + '>',
                    'brick',
                    'alittlecringe',
                    'minecraftdiamonds',
                    'darkagehorrorpsychofuckinger',
                    'stupidmotherfucker'
                ];
                var rng = Math.floor(Math.random() * pill.length);
                message.channel.send('and ' + pill[rng] + 'pilled');
                break;
            case /ily spunk.*/.test(cmd + args_string):
            case ilyregex.test(cmd + args_string):
                message.channel.send('I love you too! <3');
                break;
            //the following case is kinda ugly imo, sorry I don't know how to do better in javascript rn
            case /based/.test(cmd + args_string):
                if(!/based on/.test(cmd + args_string)){
                    message.channel.send('based on what');
                }
                break;
            case /i\'m so glad hatsune miku made .*/.test(cmd + args_string):
                console.log('hatsune miku made something');
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