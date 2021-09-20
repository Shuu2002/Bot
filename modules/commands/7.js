const fs = require("fs");
module.exports.config = {
name: "​​​​​​​",
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
	if (event.body.indexOf("tuyệt vọng")==0 || (event.body.indexOf("Tuyệt vọng")==0)) {
		var msg = {
				body: "Đừng vì những chuyện nhỏ mà đánh mất sự tự tin và chín chắn của mình. Sóng gió rồi cũng sẽ qua, biển lại hiền hòa và êm dịu. Tôi tin bạn sẽ vượt qua được thử thách lần này và tôi sẽ luôn bên bạn.",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}