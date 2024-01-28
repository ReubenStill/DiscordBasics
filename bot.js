npm init
npm install discord.js
const { Client, Intents } = require('discord.js');

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the bot is ready, log a message to the console
client.once('ready', () => {
  console.log('Ready!');
});

// Listen for messages
client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message starts with the command prefix (e.g., !)
  if (message.content.startsWith('!hello')) {
    // Reply to the message
    message.reply('Hello! I am your friendly Discord bot.');
  }
});

// Login to Discord with your app's token
client.login('YOUR_BOT_TOKEN');
