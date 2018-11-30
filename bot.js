const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("517693465069355012");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome, To Venom , Network . **`), 4000)        
}
});

bot.login("");// لا تغير فيها شيء
