module.exports.config = {
	name:"uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HelyT",
	description: "Random ảnh theo api - uptime",
	commandCategory: "system",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	axios.get('https://api.vinhbeat.repl.co/1.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Bot của Nguyễn Quốc Vinh đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây ❤️.\n\n🔥 Tổng người dùng: ${global.data.allUserID.length}\n🔥 Tổng nhóm: ${global.data.allThreadID.length}\n🔥 Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n🔥 Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n🔥 Ping: ${Date.now() - timeStart}`,
						attachment: fs.createReadStream(__dirname + `/cache/girl.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/girl.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/girl.${ext}`)).on("close", callback);
			})
}