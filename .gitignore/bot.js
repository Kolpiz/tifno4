const Commando = require('discord.js-commando');
const config = require("./kjhhlolm");

const client = new Commando.Client({
    owner: config.ID,
    commandPrefix: config.prefix,
    disableEveryone: true,
    unknownCommandResponse: false
});

// Command group registries
client.registry.registerGroup('khkhkh', 'Khkhkh');


// Registries etc.
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/rtfyyhhj");

client.login(config.TOKEN);
