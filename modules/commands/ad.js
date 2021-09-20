module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "CHIP",
    description: "Thông tin về admin",
    commandCategory: "Command",
    usages: "ad",
    cooldowns: 5,
    dependencies: {
      "request": ""
    }
};

module.exports.run = ({ api, event, args }) => {
    const request = require("request");
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`Admin: Nguyễn Quốc Vinh`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        var codeData = JSON.parse(body);
        if (codeData.error === true) return api.sendMessage(getText('cantFindHentai'), threadID, messageID);
        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters === '') characters = 'Original';
        api.sendMessage(`» Tên: ${title}\n» Tác giả: ${artists}\n» Nhân vật: ${characters}\n» Tags: ${tags}\n» Liên kết: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}