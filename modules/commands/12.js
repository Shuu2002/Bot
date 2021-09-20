const fs = require("fs");
module.exports.config = {
name: "​​​​​​​​​​​​",
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
	if (event.body.indexOf("Ê Vinh")==0 || (event.body.indexOf("hú vinh")==0)) {
		var msg = {
				body: "Hi, Có thể bạn chưa biết\nVinh là tên admin của mình^^",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}