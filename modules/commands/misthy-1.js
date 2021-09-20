module.exports.config = {
  name: "misthy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Quốc Vinh (Vinhbeat)",
  description: "Image",
  commandCategory: "Vinhbeat",
  usages: "[Ảnh misthy]",
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
"https://imgur.com/e6O9GDc.jpg",
"https://imgur.com/ufS1wIW.jpg",
"https://imgur.com/sEOwFUo.jpg",
"https://imgur.com/yCgS0Pb.jpg",
"https://imgur.com/xUeOwtJ.jpg",
"https://imgur.com/HdbK7dd.jpg",
"https://imgur.com/m4jfriH.jpg",
"https://imgur.com/D8sdHWV.jpg",
"https://imgur.com/IzW4TWA.jpg",
"https://imgur.com/KwiPVAi.jpg",
"https://imgur.com/ELWCjTA.jpg",
"https://imgur.com/qQAa8mD.jpg",

     ];
     var callback = () => api.sendMessage({body:`Ảnh của bạn đây...`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };
