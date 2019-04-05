const Commando = require('discord.js-commando');
const https = require("https");
const xml2js = require('xml2js');

const config = require("../../kjhhlolm.json");

class Rule34Command extends Commando.Command {
    constructor (client) {
        super(client, {
            name: 'rule34',
            aliases: ['r34'],
            memberName: 'rule34',
            nsfw: true,
            throttling: {
                usages: 999,
                duration: 1
            },
            description: 'Envoie une image cochonne :S',
            examples: [kjhhlolm.prefix + 'r34 loli+small_breasts']
        });
    }

    async run(message, args) {
        try {
            if(message.message.channel.nsfw){
                if(args[0] === undefined){
                    var argR = "";
                } else {
                    var argR = args;
                }

                var url = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=' + argR;

                https.get(url, function(res){
                    var body = '';
            
                    res.on('data', function(chunk){
                        body += chunk;
                    });
            
                    res.on('end', function(){
                        var parser = new xml2js.Parser();
                        parser.parseString(body, function (err, result) {
                            var postCount = result.posts.$.count - 1;
                            if(postCount > 100) {
                                postCount = 100;
                            }
                            if(postCount > 0) {
                                var picNum = Math.floor(Math.random() * postCount) + 0;
                                var r34Pic = result.posts.post[picNum].$.file_url;
                                message.channel.send({
                                    files: [r34Pic]
                                });
                            
                            } else {
                                console.log("Nothing found:", argR);
                                message.channel.send("Je n'ai rien trouvé sur ta demande.");
                            }

                            });
                        });
                    }).on('error', function(e){
                        console.log("Erreur, BIP - BIP - Veuillez contacter un administateur.", e);
                });
            } else {
                message.channel.send("Ce channel n'est pas en NSFW !");
            }
        } catch(e) {
            console.log(e);
        }
    }
}

module.exports = Rule34Command;
