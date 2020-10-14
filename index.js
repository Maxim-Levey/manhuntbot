const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');

const util = require('minecraft-server-util');

const bot = new Client();
const prefix = '$';
const token = 'BotTokenRedacted';

bot.on('ready', () => {
  console.log('ManhuntBot is online!')
  bot.user.setActivity('Manhunt.rip | $info')
})

bot.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
  if (!channel) return;

  const WelcomeEmbed = new Discord.MessageEmbed()
    .setTitle('Welcome to Manhunt!')
    .setColor('#ffaa00')
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
        .setColor("#ffaa00")
        .setDescription(
        "`$help` A full list of commands!\n\n`$info` Everything you need to know about Manhunt.rip\n\n`$status` Pings the server and lets you know its up and running\n\n"
        );
      msg.channel.send(HelpEmbed);
    break;
    case "supportembed":
      const SupportEmbed = new Discord.MessageEmbed()
        .setTitle("Create a Ticket")
        .setColor("#ffaa00")
        .setDescription(
        "Got a server enquiry? A bug report? Maybe something else?\n\nOur friendly support team would be more than happy to help!\n\nHead on over to <#764434995783270400> and type `-new` to get started."
        );
      msg.channel.send(SupportEmbed);
    break;
    case "info":
      const InfoEmbed = new Discord.MessageEmbed()
        .setTitle("Information")
        .setColor("#ffaa00")
        .setDescription(
        "Want to know more about Manhunt? Head on over to our forums at **https://manhunt.rip/** or jump right onto the server by adding `play.manhunt.rip` to your server list!"
        );
      msg.channel.send(InfoEmbed);
    break;
    case "ping":
    case "status":
    //https://www.npmjs.com/package/minecraft-server-util
      util.status('play.hypixel.net')
      .then((response) => {
        const IPEmbed = new Discord.MessageEmbed()
             .setTitle('Manhunt.rip is Online!')
             .setColor("#ffaa00")
             .addField('**IP:**', response.host)
             .addField('**Players Online:**', response.onlinePlayers);
           msg.channel.send(IPEmbed);
      })
      .catch((error) => {
        throw error;
      });
    break;
    default:
      const WhoopsEmbed = new Discord.MessageEmbed()
        .setTitle("Whoops!")
        .setColor("#ffaa00")
        .setDescription(
        "Uh oh! That command doesn't exist\n\nThink it should? Open a ticket on the Manhunt.rip Discord and let us know! "
        );
      msg.author.send(WhoopsEmbed);
    break;
  }
})

bot.login(token);





```js

const prefix = '!';

var userManager = discord.GetUserManager();
var premiumType = userManager.GetCurrentUserPremiumType();

client.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.client) return;
  const args = msg.content.slice(prefix.length).split(/ +/);

switch (args[0]) {
case "nitro":
  switch (premiumType)
    {
        case PremiumType.None:
        const None = new Discord.MessageEmbed()
          .setTitle("You do not have nitro!")
          .setColor("#ffaa00");
        msg.author.send(None);
        return;
        case PremiumType.Tier1:
        const One = new Discord.MessageEmbed()
          .setTitle("You have Nitro Classic!")
          .setColor("#ffaa00");
          msg.author.send(One);
        return;
        case PremiumType.Tier2:
        const Two = new Discord.MessageEmbed()
          .setTitle("You have Nitro+!")
          .setColor("#ffaa00");
          msg.author.send(Two);
        return;
        default:
        return;
}``` 
