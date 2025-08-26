const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// USE THE CHANNEL ID YOU GOT FROM !getid
const GOODBYE_CHANNEL_ID = '1292599101392687134';

client.once('ready', () => {
    console.log('✅ Bot is online and ready!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }
    
    if (message.content === '!testgoodbye') {
        // Only try ONE method to find the channel
        const channel = client.channels.cache.get(GOODBYE_CHANNEL_ID);
        
        if (channel) {
            // Send message to the goodbye channel
            channel.send(`😢 Goodbye, **${message.author.tag}**! This is a test! 👋`);
            // Reply to the user who typed the command
            message.reply('✅ Goodbye message sent to the goodbye channel!');
        } else {
            message.reply('❌ Could not find the goodbye channel! Use !getid to find the correct ID.');
        }
    }
    
    if (message.content === '!getid') {
        message.reply(`📝 This channel ID: **${message.channel.id}**`);
    }
});

client.login('MTQwOTk1MjgwODE1MjcyNzYxMw.G0CDiS.LicJKJeuZ60vy-LNL4qW7As0kuwcU0kz6-iXrQ');
