const Discord = require("discord.js");
const axios = require("axios");

const bot = new Discord.Client();

const token= "Nzg2MTc0NDQ1MzQ5MTA5ODAx.X9CkAg.YIvvImCmQnB0r9JIPg-65ML1XvM";

const prefix="^";

bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }

  const args= msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase()
  console.log(args)

  if(command === '打招呼' || command === 'hello' ){
    msg.react(":johnnyface:");
    msg.reply('幹你娘');

  }

  if(command === 'ds'){
    let getDs= async() =>{
      axios.defaults.headers.common['Authorization'] = "82733dec-472187ff-bda5b363-36e906ed";
      
      let response =await axios.get('https://fortniteapi.io/v1/shop?lang=en');
      let result =response.data;
      return result;
    }
    let dsv=await getDs();
    msg.channel.send(`daily: \n 
    ${dsv.daily[0].name} \n ${dsv.daily[0].type} \n ${dsv.daily[0].price}
    ${dsv.daily[0].image} \n \n`);
    msg.channel.send(`daily: \n 
    ${dsv.daily[1].name} \n ${dsv.daily[1].type} \n ${dsv.daily[1].price}
    ${dsv.daily[1].image} \n \n`);
    msg.channel.send(`daily: \n 
    ${dsv.daily[2].name} \n ${dsv.daily[2].type} \n ${dsv.daily[2].price}
    ${dsv.daily[2].image} \n \n`);
    msg.channel.send(`daily: \n 
    ${dsv.daily[3].name} \n ${dsv.daily[3].type} \n ${dsv.daily[3].price}
    ${dsv.daily[3].image} \n \n`);
    msg.channel.send(`daily: \n 
    ${dsv.daily[4].name} \n ${dsv.daily[4].type} \n ${dsv.daily[4].price}
    ${dsv.daily[4].image} \n \n`);
    msg.channel.send(`daily: \n 
    ${dsv.daily[5].name} \n ${dsv.daily[5].type} \n ${dsv.daily[5].price}
    ${dsv.daily[5].image} \n \n`);
     msg.channel.send(`featured: \n 
    ${dsv.featured[0].name} \n ${dsv.featured[0].type} \n ${dsv.featured[0].price}
    ${dsv.featured[0].image} \n \n`);
     msg.channel.send(`featured: \n 
    ${dsv.featured[1].name} \n ${dsv.featured[1].type} \n ${dsv.featured[1].price}
    ${dsv.featured[1].image} \n \n`);
  
   msg.channel.send(`featured: \n 
    ${dsv.featured[2].name} \n ${dsv.featured[2].type} \n ${dsv.featured[2].price}
    ${dsv.featured[2].image} \n \n`);
  
   msg.channel.send(`featured: \n 
    ${dsv.featured[3].name} \n ${dsv.featured[3].type} \n ${dsv.featured[3].price}
    ${dsv.featured[3].image} \n \n`);
  
   msg.channel.send(`featured: \n 
    ${dsv.featured[4].name} \n ${dsv.featured[4].type} \n ${dsv.featured[4].price}
    ${dsv.featured[4].image} \n \n`);
  

  
    
  }

  if(command === 'fi'){
    let getFi= async() =>{
      axios.defaults.headers.common['Authorization'] = "82733dec-472187ff-bda5b363-36e906ed";
      let response =await axios.get('https://fortniteapi.io/v1/creative/featured');
      let result =response.data;
      return result;
    }
    let fiv =await getFi();
    //console.log(fiv);
    msg.channel.send(`featured island: \n
    ${fiv.featured[0].title} \n ${fiv.featured[0].description} \n ${fiv.featured[0].image} \n
    `);
    msg.channel.send(`featured island: \n
    ${fiv.featured[1].title} \n ${fiv.featured[1].description} \n ${fiv.featured[1].image} \n
    `);
    msg.channel.send(`featured island: \n
    ${fiv.featured[2].title} \n ${fiv.featured[2].description} \n ${fiv.featured[2].image} \n
    `);
    msg.channel.send(`featured island: \n
    ${fiv.featured[3].title} \n ${fiv.featured[3].description} \n ${fiv.featured[3].image} \n
    `);

  }








});

bot.login(token);
