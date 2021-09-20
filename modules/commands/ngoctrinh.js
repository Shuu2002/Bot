module.exports.config = {
  name: "ngoctrinh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Quốc Vinh (Vinhbeat)",
  description: "Image",
  commandCategory: "Vinhbeat",
  usages: "[Ảnh Ngọc Trinh]",
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
"https://imgur.com/dkVAdQY.jpg",
"https://imgur.com/Qam80TF.jpg",
"https://imgur.com/3lkh6NA.jpg",
"https://imgur.com/ihK0a6F.jpg",
"https://imgur.com/LZiPQGl.jpg",
"https://imgur.com/SB3ryKP.jpg",
"https://imgur.com/QuYHPeE.jpg",
"https://imgur.com/Dkou7dF.jpg",
"https://imgur.com/RbWlzh5.jpg",
"https://imgur.com/zaACrD9.jpg",

     ];
     var callback = () => api.sendMessage({body:`Ảnh của bạn đây...`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };
