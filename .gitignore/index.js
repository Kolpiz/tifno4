// Début du code
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; // Préfix du bot


// Pemière action du bot quand il s'allume 
client.on("ready", () => {

  var i;
  for (i = 0; i < 1000000; i++) { 
    client.channels.get("522743449754140676").send("@everyone") // Natthh
  }


});

client.login(token)


