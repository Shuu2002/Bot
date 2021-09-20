const fs = require("fs");
module.exports.config = {
name: "​",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Vinhbeat",
	description: "Chào",
	commandCategory: "Vinhbeat",
	usages: "*",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("!help")==0 || (event.body.indexOf("!Help")==0)) {
		var msg = {
				body: "⚜️ Đây là những lệnh hay dùng ⚜️\n1. !ping\n2. !boxinfo\n3. !girl\n4. !boy\n5. !kiss\n6. !tát\n7. !đấm\n8. !địt\n9. !ôm\n10. !nude\n🔷 Hiện tại đang có 10 lệnh sử dụng thường xuyên\nSử dụng !menu để xem toàn bộ lệnh của bot🔷",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}