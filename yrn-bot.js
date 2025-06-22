const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./token.json'); // importa il JSON

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Connesso come ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('pong!');
  }
});

client.login(config.token);