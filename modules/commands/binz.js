module.exports.config = {
	name: "binz",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Vinhbeat",
	description: "Random ảnh trai xinh",
	commandCategory: "hình ảnh",
	usages: "binz",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vinhbeat.repl.co/binz.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/gái.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gái.${ext}`)).on("close", callback);
			})
}
