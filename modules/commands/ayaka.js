module.exports.config = {
  name: "ayaka",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh ayaka",
  commandCategory: "genshin impact",
  usages: "ayaka",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/uXWLBeC.jpeg",
    "https://i.imgur.com/7Dc9GrN.jpeg",
    "https://i.imgur.com/IaAVMFK.jpeg",
    "https://i.imgur.com/WceNH2z.jpeg",
    "https://i.imgur.com/1XosaEA.jpeg",
    "https://i.imgur.com/M58fVe6.jpeg",
    "https://i.imgur.com/czaXZ3a.jpeg",
    "https://i.imgur.com/xsu6v2I.jpeg",
    "https://i.imgur.com/f17dCCM.jpeg",
    "https://i.imgur.com/opquSuU.jpeg",
    "https://i.imgur.com/U87kL1B.jpeg",
    "https://i.imgur.com/Osa1EEd.jpeg",
    "https://i.imgur.com/38XTSUn.jpeg",
    "https://i.imgur.com/B7mAsZB.jpeg",
    "https://i.imgur.com/2APmfRs.jpeg",
    "https://i.imgur.com/mCUOJ8U.jpeg",
    "https://i.imgur.com/CnN1DxG.jpeg",
    "https://i.imgur.com/onlEme6.jpeg",
    "https://i.imgur.com/OF73muW.jpeg",
    "https://i.imgur.com/UO1sK8I.jpeg",
    "https://i.imgur.com/AlkGMJr.jpeg",
    "https://i.imgur.com/yZy8yvG.jpeg",
    "https://i.imgur.com/wLuwsWH.jpeg",
    "https://i.imgur.com/NoLgneL.jpeg",
    "https://i.imgur.com/wnXPqVv.jpeg",
    "https://i.imgur.com/D4ORkkM.jpeg",
    "https://i.imgur.com/bXZCoXT.jpeg",
    "https://i.imgur.com/ixx7Psr.jpeg",
    "https://i.imgur.com/TWP438b.jpeg",
    "https://i.imgur.com/zEiGsZE.jpeg",
    "https://i.imgur.com/pFbFkvj.jpeg",
    "https://i.imgur.com/U9fPLgz.jpeg",
    "https://i.imgur.com/VjOIoAg.jpeg",
    "https://i.imgur.com/gmYkkFF.jpeg",
    "https://i.imgur.com/4o5MRal.jpeg",
    "https://i.imgur.com/XDGkXfZ.jpeg",
    "https://i.imgur.com/B50Pi6m.jpeg",
      "https://i.imgur.com/BZKVLfn.jpeg",
      "https://i.imgur.com/wSQv7mM.jpeg",
      "https://i.imgur.com/2Ky8mww.jpeg",
      "https://i.imgur.com/4fhxxts.jpeg",
      "https://i.imgur.com/rvFm33m.jpeg",
      "https://i.imgur.com/J2EG5QV.jpeg",
      "https://i.imgur.com/JwkXNeQ.jpeg",
      "https://i.imgur.com/S9AGlH6.jpeg",
      "https://i.imgur.com/L9Jg1pg.jpeg",
      "https://i.imgur.com/urJBEyk.jpeg",
      "https://i.imgur.com/Hpw0D8O.jpeg",
      "https://i.imgur.com/i5hdv5w.jpeg",
      "https://i.imgur.com/O2uymjw.jpeg",
           "https://i.imgur.com/GiSKHaT.jpeg",
           "https://i.imgur.com/dAs2g30.jpeg",
           "https://i.imgur.com/RIhBJhH.jpeg",
           "https://i.imgur.com/pvSpSEb.jpeg",
           "https://i.imgur.com/XUJdz0T.jpeg",
           "https://i.imgur.com/jad2M8w.jpeg",
           "https://i.imgur.com/vbOsMtC.jpeg",
           "https://i.imgur.com/ZTtxhm8.jpeg",
           "https://i.imgur.com/8Qf8hLj.jpeg",
           "https://i.imgur.com/FXGMlHp.jpeg",
           "https://i.imgur.com/jWDw41w.jpeg",
           "https://i.imgur.com/LgvUCju.jpeg",
           "https://i.imgur.com/sdBRGt3.jpeg",
           "https://i.imgur.com/I32E7mo.jpeg",
           "https://i.imgur.com/OBbsiOY.jpeg",
           "https://i.imgur.com/ZlwE7gK.jpeg",
           "https://i.imgur.com/RjTJEia.jpeg",
           "https://i.imgur.com/mihSwWi.jpeg",
           "https://i.imgur.com/XLLJjEM.jpeg",
           "https://i.imgur.com/NkMNc9U.jpeg",
           "https://i.imgur.com/DscSpW9.jpeg",
           "https://i.imgur.com/jA1JB8Z.jpeg",
           "https://i.imgur.com/4744YOK.jpeg",
           "https://i.imgur.com/L7ZmAdP.jpeg",
           "https://i.imgur.com/fnqGUzZ.jpeg",
           "https://i.imgur.com/4r5vG6y.jpeg",
           "https://i.imgur.com/mOZyIBN.jpeg",
           "https://i.imgur.com/5nKPTdH.jpeg",
           "https://i.imgur.com/2DoiyZg.jpeg",
           "https://i.imgur.com/BDvYK5e.jpeg",
           "https://i.imgur.com/JImr4HA.jpeg",
           "https://i.imgur.com/SDYcTdB.jpeg",
           "https://i.imgur.com/GH3rmiF.jpeg",
           "https://i.imgur.com/tUjsJk6.jpeg",
           "https://i.imgur.com/jvjWcZ9.jpeg",
           "https://i.imgur.com/9l5tHki.jpeg",
           "https://i.imgur.com/P4GYTjs.jpeg",
           "https://i.imgur.com/4qXII5h.jpeg",
           "https://i.imgur.com/wix18FM.jpeg",
           "https://i.imgur.com/h6JyuUd.jpeg",
           "https://i.imgur.com/agZEIfN.jpeg",
           "https://i.imgur.com/qQJmQ7X.jpeg",
           "https://i.imgur.com/SJ7tHsd.jpeg",
           "https://i.imgur.com/IWsuHJN.jpeg",
           "https://i.imgur.com/PshaE6A.jpeg",
           "https://i.imgur.com/OvAjaUQ.jpeg",
           "https://i.imgur.com/CW4Id3o.jpeg",
           "https://i.imgur.com/5SWTCJ4.jpeg",
"https://i.imgur.com/5wgx5xl.jpeg",
"https://i.imgur.com/qaPr6mQ.jpeg",
"https://i.imgur.com/uW0fBgO.jpeg",
"https://i.imgur.com/olf2xpG.jpeg",
"https://i.imgur.com/x5JKmPw.jpeg",
"https://i.imgur.com/dBNTYf9.jpeg",
"https://i.imgur.com/2T0eFkH.jpeg",
"https://i.imgur.com/iRbxHZh.jpeg",
"https://i.imgur.com/m9l4I3S.jpeg",
"https://i.imgur.com/EU5xTGf.jpeg",
"https://i.imgur.com/B35323S.jpeg",
"https://i.imgur.com/hsxQ48d.jpeg",
"https://i.imgur.com/nkumWQm.jpeg",
"https://i.imgur.com/cYbi3as.jpeg",
"https://i.imgur.com/TQfRWiW.jpeg",
"https://i.imgur.com/Iyb3MEa.jpeg",
"https://i.imgur.com/SVD7wN2.jpeg",
"https://i.imgur.com/7XIiirq.jpeg",
"https://i.imgur.com/nHQ6Rqa.jpeg",
"https://i.imgur.com/e763mUo.jpeg",
"https://i.imgur.com/qvNqT5P.jpeg",
"https://i.imgur.com/e6QyiwR.jpeg",
"https://i.imgur.com/G9FASj2.jpeg",
"https://i.imgur.com/3N3gGqh.jpeg",
"https://i.imgur.com/QZRGXFX.jpeg",
"https://i.imgur.com/VzaKxx6.jpeg",
"https://i.imgur.com/1cmr7Ad.jpeg",
"https://i.imgur.com/jdQ6SVb.jpeg",
"https://i.imgur.com/9liZicg.jpeg",
"https://i.imgur.com/iD9VNKo.jpeg",
"https://i.imgur.com/05HJFci.jpeg",
"https://i.imgur.com/a8gZQ9e.jpeg",
"https://i.imgur.com/LSqJMak.jpeg",
"https://i.imgur.com/uB8NhFv.jpeg",
"https://i.imgur.com/8dgewsP.jpeg",
"https://i.imgur.com/gypOWfv.jpeg",
"https://i.imgur.com/PodfwaN.jpeg",
"https://i.imgur.com/0gR6TTG.jpeg",
"https://i.imgur.com/CJ6xq2C.jpeg",
"https://i.imgur.com/33yAFYN.jpeg",
"https://i.imgur.com/GE6rY4b.jpeg",
"https://i.imgur.com/5YiKni7.jpeg",
"https://i.imgur.com/tTpsggV.jpeg",
"https://i.imgur.com/1wnzrpb.jpeg",
"https://i.imgur.com/u2SOj6D.jpeg",
"https://i.imgur.com/XghXIZd.jpeg",
"https://i.imgur.com/MLv50h2.jpeg",
"https://i.imgur.com/Ul9YE3T.jpeg",
"https://i.imgur.com/FLdygby.jpeg",
"https://i.imgur.com/P6yNRzL.jpeg",
"https://i.imgur.com/ir8hEiY.jpeg",
"https://i.imgur.com/RIdLkSW.jpeg",
"https://i.imgur.com/N24vwBX.jpeg",
"https://i.imgur.com/WUWBJJb.jpeg",
"https://i.imgur.com/nb9mVTz.jpeg",
"https://i.imgur.com/jU3blMb.jpeg",
"https://i.imgur.com/w3aF5Bt.jpeg",
"https://i.imgur.com/jRaCKmA.jpeg",
"https://i.imgur.com/zNjMTtq.jpeg",
"https://i.imgur.com/0HhIVqQ.jpeg",
"https://i.imgur.com/IpihWYJ.jpeg",
"https://i.imgur.com/7C8BLax.jpeg",
"https://i.imgur.com/jUrytiI.jpeg",
"https://i.imgur.com/cueB4lN.jpeg",
"https://i.imgur.com/54549bh.jpeg",
"https://i.imgur.com/a8MKleW.jpeg",
"https://i.imgur.com/QmgVX6E.jpeg",
"https://i.imgur.com/sL1ZI5P.jpeg",
"https://i.imgur.com/H8W2emG.jpeg",
"https://i.imgur.com/BxPIkwd.jpeg",
"https://i.imgur.com/4mE5STz.jpeg",
"https://i.imgur.com/aygdqfX.jpeg",
"https://i.imgur.com/huvwe6B.jpeg",
"https://i.imgur.com/tRYS1nh.jpeg",
"https://i.imgur.com/HS7xOQ6.jpeg",
"https://i.imgur.com/hMHC3bz.jpeg",
"https://i.imgur.com/yY1nmi2.jpeg",
"https://i.imgur.com/pIdwoRO.jpeg",
"https://i.imgur.com/2WLDQ8V.jpeg",
"https://i.imgur.com/Hb6CiL9.jpeg",
"https://i.imgur.com/kWccIsE.jpeg",
"https://i.imgur.com/Kjnq9qO.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`Ảnh Ayaka Nè\nSố Ảnh: ${link.length}\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
