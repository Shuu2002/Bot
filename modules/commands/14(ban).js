module.exports.config = {
    name: "​​​​​​​​​​​​​​",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Vinhbeat",
    description: "Baned",
    commandCategory: "Hidden command",
    usages: "",
    cooldowns: 0
};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "bot ngu") ? api.sendMessage("Bạn đã bị baned vì đã chửi bot", event.threadID, () => 
                    global.data.userBanned.set(parseInt(event.senderID), 1): '';
module.exports.run = () => {}
