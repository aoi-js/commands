module.exports = {
  name: "prefix",
  aliases: ["setprefix", "set-prefix", "changeprefix", "change-prefix"],
  code: `
  $onlyIf[$message!=;{description:Prefix for this server is $getServerVar[prefix]}]
  $description[Changed prefix for $serverName to \`$message\`]
  $color[GREEN]
  $setServerVar[prefix;$message]
  `}
}
