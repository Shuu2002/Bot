const fs = require("fs");
module.exports.config = {
name: "​​​​​​​​",
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
	if (event.body.indexOf(".bot")==0 || (event.body.indexOf("ê bot")==0)) {
		var msg = {
				body: "Xin chào\nTôi là bot đây, nếu bạn cần xem lệnh thì gõ !menu nhé",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}