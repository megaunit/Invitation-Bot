const Discord = require("discord.js");

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_INVITES",
        "GUILD_MESSAGES",
        "DIRECT_MESSAGES",
        "",
    ],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// client.on("messageCreate", (message) => {
//     console.log(message.content);
// });

client.on("messageCreate", (message) => {
    if (message.content === "invite") {
        if (
            message.guild.members.cache
                .get(message.author.id)
                ._roles.includes("1000581564624805958") // The ID of the Inviter role
        ) {
            message.reply("Please check your DM");
            let invite;
            invite = message.guild.systemChannel
                .createInvite({
                    maxAge: 0,
                    maxUses: 1,
                    unique: true,
                })
                .then((link) => {
                    client.users
                        .send(
                            message.author.id,
                            `Please share it wisely as this server is only for kgsp students.\nHere's your one time use invite link:\n${link}`
                        )
                        .then(
                            console.log(
                                `User ${message.author.username} made an invite to ${message.guild.name}` // To be able to monitor invitations
                            )
                        );
                });
        } else {
            message.reply(
                "Sorry, you don't have a permission to invite other users."
            );
        }
        // console.log(message.author.id);
        // console.log(Message.member.roles);
    }
});

const config = require("./config.json");
client.login(config.token); // Imports token from another file
