module.exports.config = {
  name: "rosé",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Quốc Vinh (Vinhbeat)",
  description: "Image",
  commandCategory: "Vinhbeat",
  usages: "[Ảnh rosé]",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://imgur.com/7yxOCZC.jpg",
"https://imgur.com/uSL6XMX.jpg",
"https://imgur.com/uJtWX4H.jpg",
"https://imgur.com/EHE1Sn9.jpg",
"https://imgur.com/9VKAdBI.jpg",
"https://imgur.com/NBgqRjS.jpg",
"https://imgur.com/yX1po44.jpg",
"https://imgur.com/1yF5vsW.jpg",
"https://imgur.com/nkVFzxq.jpg",
"https://imgur.com/CHhFuC6.jpg",
"https://imgur.com/hWI39rY.jpg",

     ];
     var callback = () => api.sendMessage({body:`Ảnh của bạn đây...`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };
