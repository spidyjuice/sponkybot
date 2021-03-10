module.exports = {
    name: 'roll',
    aliases: ['rng', 'flip'],
    description: "print my git repository",
    execute(client, message, cmd, args, Discord){
        var args_string = args.toString();
        switch (args_string) {
            case 'coin':
            case 'my coin':
                var bottom = 0;
                var top = 1;
                break;
            case 'my dice':
            case 'd6':
                var bottom = 1;
                var top = 6;
                break;
            case '*':
                var bottom = 0;
                var top = 99;
        }
        var rng = bottom(Math.random() * top);
        message.channel.send(rng);
    }
}