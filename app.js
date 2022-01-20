import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import Discord from 'discord.js'; //import discord.js
import {Client, Intents} from 'discord.js';
//functions imported from other files
import {haloRankCurrent} from './halo.js';
// Config Variables
const PORT = process.env.PORT;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const app = express();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

dotenv.config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('messageCreate', async msg => {
        let gtag = msg.content.slice(1)
        //msg.reply('Pong!');
        if(msg.content[0]==='!'){
            try {
                let data = await haloRankCurrent(gtag);
                msg.reply("here is your data \nhello")
            } catch (error) {
                
            }
        }
        
        
        
    
});

client.on('interactionCreate', interaction => {
	if (!interaction.isCommand()) return;
	console.log(interaction);
});
//make sure this line is the last line
client.login(process.env.DISCORD_TOKEN); //login bot using token





app.listen(PORT, ()=>{
    console.log('listening on port 3000')
})