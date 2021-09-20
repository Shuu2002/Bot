/** Hầu hết mấy ông dùng bypass module donate thì chả cần dùng cái này đâu vì tội gì mà không dùng mấy module xịn hơn đúng k =))**/
/** Đổi Credit ? Nếu bạn không có văn hóa như Hà Mạc Trường Giang ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Quốc Vinh ( Vinhbeat )",
	description: "Luật bot",
	commandCategory: "Vinhbeat",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`🔥Bạn dùng bot thoải mái nhé.\n🔥Lệnh bot !help\n🔥Bot hoạt động 24/24\n🔥Cấm sử dụng 2 bot trong 1 nhóm\n🔥Câm chửi bot\n🔥Cấm spam\nVi phạm những điều trên bị phát hiện sẽ baned vĩnh viễn`, event.threadID, event.messageID);
