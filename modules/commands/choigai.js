module.exports.config = {
    name: "choigai",
    version: "2.2.2",
    hasPermssion: 0,
    credits: "CHIP2502",
    description: "",
    commandCategory: "Command",
    usages: "[@tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'choigai.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/A7T04KJ.jpg", path);
}
async function makeImage({ one, two }) {    
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"];
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let choigai_image = await jimp.read(__root + "/choigai.png");
    let pathImg = __root + `/choigai_${one}_${two}.png`;
    let avatarOne = (await axios.get(`https://meewmeew.info/avatar/${one}`)).data;    
    let avatarTwo = (await axios.get(`https://meewmeew.info/avatar/${two}`)).data;    
    let circleOne = await jimp.read(await circle(Buffer.from(avatarOne, 'utf-8')));
    let circleTwo = await jimp.read(await circle(Buffer.from(avatarTwo, 'utf-8')));
    choigai_image.composite(circleOne.resize(150, 150), 56, 164).composite(circleTwo.resize(150, 150), 380, 190);
    
    let raw = await choigai_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Vui lòng tag 1 người.", threadID, messageID);
    else {
        var one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Đã quá a ui :3", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}