const fs = require("fs");
module.exports.config = {
name: "​​​​​",
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
	if (event.body.indexOf("😭")==0 || (event.body.indexOf("khóc")==0)) {
		var msg = {
				body: "Buồn làm gì cho đời thêm khổ, khóc làm chi cho khổ cuộc đời, chán làm chi cho tương lai đen tối, hãy vững tin và mạnh mẽ đối diện với khó khăn.",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}