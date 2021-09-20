const fs = require("fs");
module.exports.config = {
name: "​​​​​​​​​",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Vinhbeat",
	description: "Vinhbeat",
	commandCategory: "Hidden command",
	usages: "*",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot ơi")==0 || (event.body.indexOf("Bot ơi")==0)) {
		var msg = {
				body: "Ơi bot đây, chào bạn.... ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}