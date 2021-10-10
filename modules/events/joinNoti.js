module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bypass bởi Mai Huy Bảo" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Kết nối thành công\n» Vui lòng không spam lệnh hoặc tag bot khi box đã có bot \n» Cảm Ơn Đã Dùng Bot Của Teri\n»Không được tự ý tag Bot vô group mà ko con phép ý kiến admin/n» Không Biết Sài Thì Dùng Lệnh + Help để xem cách sử dụng.\n» Chửi Bot Xúc Phạm Bot là 1 hành động xàm l*n\n Để gỡ tin nhắn bot: dấu lệnh +  gỡ\n» 𝐋𝐢𝐧𝐤 AMDMIN Bot:\nhttps://www.facebook.com/profile.php?id=100069432743803`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `f50ccb65687cc14d1d72d8831206c133.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝑊𝑒𝑙𝑐𝑜𝑚𝑒  {name} 🥳.\Chào mừng bạn đến với {threadName} 🥰.\n{type} là thành viên thứ {soThanhVien} của nhóm 🥳.\nVợ mới nhớ tương tác nha thương" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
