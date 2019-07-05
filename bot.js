const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("594459683859726336");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**,:tanabata_tree: ~ #Weélcoome 2 ,Server**Outside.** !! :black_heart: :Outside: **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
