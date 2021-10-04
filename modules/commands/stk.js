const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Vinhbeat", 
	description: "Vinhbeat",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stk")==0 || (event.body.indexOf("STK")==0)) {
		var msg = {
				body: "Mình chạy bot hoàn toàn free nhưng nếu bạn nào có lòng tốt muốn ủng hộ mình bằnh bank hoặc card theo:\n\n\n🐳Chuyển khoản:19037171494011-TCB\n🐳Zalo:0869189602\n🐳facebook:https://www.facebook.com/profile.php?id=100056649937015\nCảm ơn các bạn đã ủng hộ:33.\nChúc các bạn trải nghiệm bot vui vẻ!!",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
