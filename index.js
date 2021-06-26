const Aoijs = require('aoi.js');
const bot = new Aoijs.Bot({
token: "YOUR_TOKEN",
prefix: ["!", "<@$clientID> "]
});

bot.onMessage()
bot.loadCommands('./commands/')
bot.status({
text: "NO ONE",
type: "WATCHING", time: "12"
})
bot.status({
text: "WIND",
type: "LISTENING", time: "12" //12 Second//
     //TYPE: LISTENING//
})
