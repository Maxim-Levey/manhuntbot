const Discord = require('discord.js');
const util = require('minecraft-server-util'); //https://www.npmjs.com/package/minecraft-server-util

const {token, prefix} = require ('./config.json')
const {Client, Attachment, MessageEmbed} = require('discord.js');

const bot = new Client();

bot.on('ready', () => {
  console.log('ManhuntBot is online!')
  bot.user.setActivity('Manhunt.rip | $info')
})

bot.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
  if (!channel) return;

  const WelcomeEmbed = new Discord.MessageEmbed()
    .setTitle('Welcome to Manhunt!')
    .setColor('#d321e4')
    .setThumbnail('https://i.imgur.com/PGlZYx8.png')
    .setDescription(`\n\nThank you for joining the Manhunt.rip Discord, <@${member.user.id}>\n\nHead on over to <#764688945593188363> to introduce yourself or visit our forums at **https://Manhunt.rip/** for more information!`)
    .setThumbnail(member.user.displayAvatarURL())
  channel.send(WelcomeEmbed)
})

bot.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);

  switch (args[0]) {
    case "help":
      const HelpEmbed = new Discord.MessageEmbed()
        .setTitle("Command List")
        .setColor("#d321e4")
        .setThumbnail('https://i.imgur.com/PGlZYx8.png')
        .setDescription(
        "`$help` A full list of commands!\n\n`$info` Everything you need to know about Manhunt.rip\n\n`$status` Pings the server and lets you know its up and running\n\n"
        );
      msg.channel.send(HelpEmbed);
    break;

    case "supportembed":
      const SupportEmbed = new Discord.MessageEmbed()
        .setTitle("Create a Ticket")
        .setColor("#d321e4")
        .setThumbnail('https://i.imgur.com/PGlZYx8.png')
        .setDescription(
        "Got a server enquiry? A bug report? Maybe something else?\n\nOur friendly support team would be more than happy to help!\n\nHead on over to <#764434995783270400> and type `-new` to get started."
        );
      msg.channel.send(SupportEmbed);
    break;

    case "info":
      const InfoEmbed = new Discord.MessageEmbed()
        .setTitle("Information")
        .setColor("#d321e4")
        .setThumbnail('https://i.imgur.com/PGlZYx8.png')
        .setDescription(
        "Want to know more about Manhunt? Head on over to our forums at **https://manhunt.rip/** or jump right onto the server by adding `play.manhunt.rip` to your server list!"
        );
      msg.channel.send(InfoEmbed);
    break; 

    case "announce":
      const AnnounceEmbed = new Discord.MessageEmbed()
        .setTitle("We're Back!")
        .setColor("#d321e4")
        .setThumbnail('https://i.imgur.com/PGlZYx8.png')
        .setDescription(
        "But not as you know us!\n\nYou may have noticed a few changes happening and while we're excited to share it with you all, we're not quite there yet.\n\nPlease stay tuned and get ready for Manhunt.rip!\n\n@everyone"
        );
      msg.channel.send(AnnounceEmbed);
    break;

    case "ping":
    case "status":
      util.status('play.manhunt.rip')
      .then((response) => {
        const IPEmbed = new Discord.MessageEmbed()
             .setTitle('Manhunt.rip is Online!')
             .setColor("#d321e4")
             .setThumbnail('https://i.imgur.com/PGlZYx8.png')
             .addField('**IP:**', response.host)
             .addField('**Players Online:**', response.onlinePlayers);
           msg.channel.send(IPEmbed);
      })
      .catch((error) => {
        throw error;
      });
    break;

    case "rank":
      const RanksEmbed = new Discord.MessageEmbed()
        .setTitle("Ranks")
        .setColor("#d321e4")
        .setThumbnail('https://i.imgur.com/PGlZYx8.png')
        .setDescription(
        "Want to know more about Manhunt? Head on over to our forums at **https://manhunt.rip/** or jump right onto the server by adding `play.manhunt.rip` to your server list!"
        );
      msg.channel.send(RanksEmbed);
    break; 
    
    default:
      const WhoopsEmbed = new Discord.MessageEmbed()
        .setTitle("Whoops!")
        .setColor("#d321e4")
        .setThumbnail('https://i.imgur.com/PGlZYx8.png')
        .setDescription(
        "Uh oh! That command doesn't exist\n\nThink it should? Open a ticket on the Manhunt.rip Discord and let us know! "
        );
      msg.author.send(WhoopsEmbed);
    break;
  }
})

bot.login(token);
