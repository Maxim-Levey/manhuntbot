const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

const token = 'BotTokenRedacted';

const PREFIX = '$';

bot.on('ready', () =>{
    console.log('ManhuntBot is online!')
    bot.user.setActivity('Manhunt.rip | $info')
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;

    const WelcomeEmbed = new Discord.MessageEmbed()
         .setTitle('Welcome to Manhunt!')
         .setColor('#ffaa00')
         .setDescription(`\n\nThank you for joining the Manhunt.rip Discord, <@${member.user.id}>\n\nHead on over to <#764688945593188363> to introduce yourself or visit our forums at **https://Manhunt.rip/** for more information!`)
         .setThumbnail(member.user.displayAvatarURL())
         
    channel.send(WelcomeEmbed)
})

bot.on('message', msg=>{
    
    let args = msg.content.slice(PREFIX.length).split(' ');

    switch (args[0]) {
        case "supportembed":
            const supportembed = new Discord.MessageEmbed()
            .setTitle("Create a Ticket")
            .setColor("#ffaa00")
            .setDescription(
              "Got a server enquiry? A bug report? Maybe something else?\n\nOur friendly support team would be more than happy to help!\n\nHead on over to <#764434995783270400> and type `-new` to get started."
            );
          msg.channel.send(supportembed);
          break;
        case "info":
            const infoembed = new Discord.MessageEmbed()
            .setTitle("Information")
            .setColor("#ffaa00")
            .setDescription(
              "Want to know more about Manhunt? Head on over to our forums at **https://manhunt.rip/** or jump right onto the server by adding `play.manhunt.rip` to your server list!"
            );
          msg.channel.send(infoembed);
          break;
        default:   
            const whoopsembed = new Discord.MessageEmbed()
            .setTitle("Whoops!")
            .setColor("#ffaa00")
            .setDescription(
                "Uh oh! That command doesn't exist\n\nThink it should? Open a ticket on the Manhunt.rip Discord and let us know! "
            );
        msg.author.send(whoopsembed);
        break;
    }
})

bot.login(token);
