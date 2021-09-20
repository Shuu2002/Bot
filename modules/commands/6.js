const fs = require("fs");
module.exports.config = {
name: "​​​​​​",
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
	if (event.body.indexOf("ct")==0 || (event.body.indexOf("chia tay")==0)) {
		var msg = {
				body: "Tôi không thể giúp bạn không vấp ngã, nhưng tôi sẽ chìa tay ra giúp đỡ khi bạn cần. Hãy mạnh mẽ để chinh phục những thử thách mới và thành công sẽ mỉm cười với bạn.",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}