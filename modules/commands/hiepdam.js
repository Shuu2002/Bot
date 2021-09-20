﻿module.exports.config = {
  name: "hiepdam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "VinhBeat",
  description: "hiepdam người bạn tag",
  commandCategory: "VinhBeat",
  usages: "[tag người bạn cần hiếp]",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs":""
  }
};

module.exports.run = function({
  api,
  event,
  args
}) {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
  else
  return request('https://api.vinhbeat.repl.co/bopvu.php', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + " Sướng quá ah ah ah...",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
}