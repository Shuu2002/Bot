module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "1536480010") {
    var aid = ["1536480010","1536480010"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Hiện tại admin của mình đang offline, nếu có việc gì quan trọng hãy ib vào facebook chính chủ của Nguyễn Quốc Vinh\nChúc bạn sử dụng bot vui vẻ ^^"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }