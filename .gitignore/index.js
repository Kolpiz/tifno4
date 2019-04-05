const Commando = require('discord.js-commando');
const config = require("./kjhhlolm.json");

const client = new Commando.Client({
    owner: kjhhlolm.ID,
    commandPrefix: kjhhlolm.prefix,
    disableEveryone: true,
    unknownCommandResponse: false
});

// Command group registries
client.registry.registerGroup('rtfyyhhj', 'rtfyyhhj');


// Registries etc.
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/rtfyyhhj");

client.login(kjhhlolm.TOKEN);

