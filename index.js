const Aoijs = require('aoi.js');
const bot = new Aoijs.Bot({
token: "YOUR_TOKEN", //BOT TOKEN//
prefix: ["!", "<@$clientID> "] //BOT PREFIX//
});

bot.onMessage()
bot.loadCommands('./commands/')
bot.status({
text: "NO ONE",
type: "WATCHING", time: "12"
})
bot.status({
text: "WIND", //THE TEXT//
type: "LISTENING", time: "12" //12 Second//
//TYPE: LISTENING//
})

bot.variables({
  variable1: "value1",
  variable2: 2,
  variable3: 'value3'
})
