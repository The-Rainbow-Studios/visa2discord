// //make a simple discord.js client
// const Discord = require('discord.js');
// const client = new Discord.Client({
//     intents: [
//         Discord.GatewayIntentBits.Guilds,
//         Discord.GatewayIntentBits.GuildMembers,
//         Discord.GatewayIntentBits.GuildModeration,
//         Discord.GatewayIntentBits.GuildEmojisAndStickers,
//         Discord.GatewayIntentBits.GuildWebhooks,
//         Discord.GatewayIntentBits.GuildInvites,
//         Discord.GatewayIntentBits.GuildVoiceStates,
//         Discord.GatewayIntentBits.GuildMessages,
//         Discord.GatewayIntentBits.DirectMessages,
//         Discord.GatewayIntentBits.MessageContent,
//         Discord.GatewayIntentBits.AutoModerationConfiguration,
//         Discord.GatewayIntentBits.AutoModerationExecution,
//       ]
// });
// client.on('ready', async () => {
//     console.log(`Logged in as ${client.user.tag}!`);
//     const test = require('../src/functions/tickets/main.js');
//     const channel = await client.channels.fetch('1123861563141533754');
//     const allMessages  = new Discord.Collection();
//   let messages = await channel.messages.fetch({ limit: 100, cache: false,
//     force: true, });

//   allMessages.concat(messages);
//   //concat doesnt do anytthing do something else
//  // console.log(allMessages)
//   while (messages.size === 100) {
//     const lastMessageId = messages.lastKey();
//     messages = await channel.messages.fetch({ limit: 100, before: lastMessageId, cache: false,
//         force: true, });
//     allMessages.concat(messages);
//   }

// const trsa = await test.quickExport(channel).catch(console.error);
// channel.send({ files: [new Discord.AttachmentBuilder(trsa, { name: `xd.html` })] })
// });
// //login to discord with your app's token
// client.login('MTEwOTA2NTQ0MjMwNTI1MzM4Ng.GSKaL5.K6nUopgM92RcZ-_2X6lSUwWcTP_Aa6qtIu324o');
// //when the bot receives a message

const {prettyBytes} = require('../index.js')
console.log(prettyBytes(100000, {locale: 'de'}, {bits: true}))
