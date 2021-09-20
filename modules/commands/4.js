const fs = require("fs");
module.exports.config = {
name: "​​​​",
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
	if (event.body.indexOf("thất bại")==0 || (event.body.indexOf("Thất bại")==0)) {
		var msg = {
				body: "Thất bại là mẹ thành công. Không có con đường nào trải đầy hoa hồng, phải có chông gai, có vấp ngã mới trưởng thành.",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}