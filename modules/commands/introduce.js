module.exports.config = {
	name: "introduce",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Vinhbeat",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Vinhbeat", 
	usages: "[thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("==== Introduce ====\nNgười chạy bot: Nguyễn Quốc Vinh\nAge: 16\ncopyright: nguyenquocvinh\nCảm ơn mọi người đã sử dụng bot của tôi\n===================",event.threadID, event.messageID);
	}
}