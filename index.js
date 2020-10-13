const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'BOTTOKENREDACTED';

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
         .setDescription(`\n\nThank you for joining the Manhunt.rip Discord, <@${member.user.id}>\n\nHead on over to <#764688945593188363> to introduce yourself or visit our forums at https://Manhunt.rip/ for more information!`)
         .setThumbnail(member.user.displayAvatarURL())
         
    channel.send(WelcomeEmbed)
})

bot.on('message', msg=>{
    
    let args = msg.content.slice(PREFIX.length).split(' ');

    switch(args[0]){
        case 'supportembed':
            const supportembed = new Discord.MessageEmbed()
            .setTitle('Create a Ticket')
            .setColor('#ffaa00')
            .setDescription('Got a server enquiry? A bug report? Maybe something else?\n\nOur friendly support team would be more than happy to help!\n\nHead on over to <#764434995783270400> and type `-new` to get started.')
            msg.channel.send(supportembed);
    }
    switch(args[0]){    
        case 'info':
            const infoembed = new Discord.MessageEmbed()
            .setTitle('Information')
            .setColor('#ffaa00')
            .setDescription('**IP:** Manhunt.rip\n\n**Forums:** https://Manhunt.rip/')
            msg.channel.send(infoembed);    
    }
})

bot.login(token);
