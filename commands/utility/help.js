module.exports = [{
  name: "help",
  code: `
  $addReactions[💰;🔧]
  $reactionCollector[$get[messageID];$authorID;10m;💰,🔧;economy,moderation;no]

  $let[messageID;

  $title[Command Modules]
  $description[
  **ECONOMY**    | Contains commands about economy
  Click 💰 or write `$getServerVar[prefix]help economy` to open

  **MODERATION** | Contains commands about moderation
  Click 🔧 or write `$getServerVar[prefix]help moderation` to open
  ]
  `
}]
