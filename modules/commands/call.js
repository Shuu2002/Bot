module.exports.config = {
    name: "call",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "tag 1 ai đó",
    usages: "call @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu tag!");
setTimeout(() => {a({body: "Alo em đâu rồi ra đây chơi đi em" + "call " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "ra đây chơi em" + "call " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "ra đây chơi nào" + "call " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "gọi  không  nghe à" + "call " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "chảnh chó vậy" + "call " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "ê dm ra đây" + "call " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "pé ơi ra đây" + "call " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "cay rồi nha" + "call " + name, mentions: arraytag})} , 8000);
 }
