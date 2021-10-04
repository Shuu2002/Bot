module.exports.config = {
	name: "gai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Vinhbeat",
	description: "Random ảnh gái xinh",
	commandCategory: "hình ảnh",
	usages: "gai",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vinhbeat.repl.co/gai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/gái.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gái.${ext}`)).on("close", callback);
			})
}
