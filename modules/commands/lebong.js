module.exports.config = {
  name: "lebong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Quốc Vinh (Vinhbeat)",
  description: "Image",
  commandCategory: "Vinhbeat",
  usages: "[Ảnh Lê Bống]",
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
"https://imgur.com/hbU8bpH.jpg",
"https://imgur.com/4Sa1pgg.jpg",
"https://imgur.com/HRyp9cQ.jpg",
"https://imgur.com/iq1xJ70.jpg",
"https://imgur.com/605oPVP.jpg",
"https://imgur.com/0SWjB77.jpg",
"https://imgur.com/RVMgVHA.jpg",
"https://imgur.com/UH4LnTO.jpg",
"https://imgur.com/XnqzdQ7.jpg",
"https://imgur.com/NfW4VS8.jpg",
"https://imgur.com/.jpg",
"https://imgur.com/qgyDsxv.jpg",
"https://imgur.com/dfWfEiq.jpg",
"https://imgur.com/1WKpou6.jpg",
"https://imgur.com/ZyGfjYs.jpg",
"https://imgur.com/74J1Ob3.jpg",
"https://imgur.com/3UE15RB.jpg",
"https://imgur.com/fenrTuL.jpg",
"https://imgur.com/ykNatyV.jpg",
"https://imgur.com/IN0mGVf.jpg",
"https://imgur.com/4mYXi8E.jpg",
"https://imgur.com/nDuULs3.jpg",
"https://imgur.com/W6EThR4.jpg",
"https://imgur.com/DEqrNIY.jpg",
"https://imgur.com/DW8p72H.jpg",
"https://imgur.com/9uV34XB.jpg",
"https://imgur.com/z6eMwaN.jpg",
"https://imgur.com/xUQto2N.jpg",
"https://imgur.com/y2pz9ml.jpg",
"https://imgur.com/yzBEKuw.jpg",
"https://imgur.com/vWqNzjB.jpg",
"https://imgur.com/4NYq1Zi.jpg",
"https://imgur.com/2ilSHZZ.jpg",

     ];
     var callback = () => api.sendMessage({body:`Ảnh của bạn đây...`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };
