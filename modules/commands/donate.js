const fs = require("fs");
module.exports.config = {
	name: "donatevinh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Vinhbeat", 
	description: "Vinhbeat",
	commandCategory: "Vinhbeat",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("donate")==0 || (event.body.indexOf("Donate")==0)) {
		var msg = {
				body: "================\nHãy donate cho tôi qua\nMBBank:\nChủ Tài Khoản: Nguyễn Quốc Vinh\n================",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}