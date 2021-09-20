const fs = require("fs");
module.exports.config = {
name: "​​​",
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
	if (event.body.indexOf("tôi sai")==0 || (event.body.indexOf("sai rồi")==0)) {
		var msg = {
				body: "Cố lên, bạn có thể làm được mà. Tôi sẽ luôn bên cạnh hỗ trợ, giúp đỡ bạn bằng hết khả năng của mình. Cuộc đời của bạn thì bạn hãy tự tin “dám nghĩ dám làm”. Sai thì sửa.",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}