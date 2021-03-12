//TODO: whoareu/whoareyou
//TODO: full whois
module.exports = {
    name: 'whois',
    aliases: ['whoami', 'whoareu', 'whoareyou', 'whoru', 'whoryou'],
    description: "who are you",
    execute(client, message, cmd, args, Discord){
        var person = []
        switch(cmd) {
            case 'whois':
                person = message.mentions.users.first();
                break;
            case 'whoami':
                person = message.author;
                break;
            case 'whoareu':
            case 'whoareyou':
            case 'whoru':
            case 'whoryou':
                person = client.user;
                break;
        }
        console.log(person);
        var smells = [
            'nice',                     //0
            'lemony',                   //1  a bit likely (this one's me! (spidyjuice))
            'coconuty',                 //2  very likley
            'christmasy',               //3
            'fruity',                   //4  pretty likely
            'petrichory',               //5
            'like coffee',              //6
            'like the ocean',           //7
            'cinnamony',                //8
            'minty',                    //9
            'mango and potent aloe',    //10
            'lavender and rosemary',    //11
            'like cucumber',            //12
            'like ginger tea',          //13
            'like sugar cookies',       //14
            'cranberry mango-y',        //15
        ]

        //var rng = Math.floor(Math.random() * pill.length);
        try{
            var smellseed = person.id
            while (smellseed > smells.length){
                smellseed = smellseed / smells.length
            };
            smellseed = Math.floor(smellseed);
            console.log('smellseed: ' + smellseed);

            var personid = person.id;
            //let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))

            description = 'test description';
        
            var embed = new Discord.MessageEmbed({
                'thumbnail': {
                    'url': person.displayAvatarURL()
                },
                'title': person.username + '#' + person.discriminator,
                'description': 
                    'nickname: ' + message.guild.member(person.id).nickname + '\n' +
                    'id: ' + person.id + '\n' +
                    'smells: ' + smells[smellseed],
            });
        }
        catch(error){
            var embed = "I don't know anything about that person!";
        }
        message.channel.send(embed);
    },
    
}