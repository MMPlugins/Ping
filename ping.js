module.exports = function({bot, commands}) {
        commands.addGlobalCommand ('ping', '',(msg, args) => {
		bot.createMessage(msg.channel.id, ":ping_pong: Pinging...").then(m =>{
			const ping = msg.timestamp - m.timestamp;
			m.edit(":ping_pong: Pong! Your Ping Is: " + ping + "ms");
		});
	});
};
