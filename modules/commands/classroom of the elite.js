module.exports.config = {
  name: "classroom of the elite",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh lớp học biết tuốt",
  commandCategory: "lớp học biết tuốt",
  usages: "",
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
"https://i.imgur.com/FshjOZJ.jpeg",
"https://i.imgur.com/qfbfvJQ.jpeg",
"https://i.imgur.com/qhpWGvm.jpeg",
"https://i.imgur.com/BXJGjXP.jpeg",
"https://i.imgur.com/OmErFBk.jpeg",
"https://i.imgur.com/qml1Fkl.jpeg",
"https://i.imgur.com/xTYaKYc.jpeg",
"https://i.imgur.com/Ap6qUen.jpeg",
"https://i.imgur.com/k7H2clS.jpeg",
"https://i.imgur.com/SyeeYR7.jpeg",
"https://i.imgur.com/pnAiLV8.jpeg",
"https://i.imgur.com/uztnhQ9.jpeg",
"https://i.imgur.com/yIbOPBF.jpeg",
"https://i.imgur.com/sIC0pWZ.jpeg",
"https://i.imgur.com/3j3V5JA.jpeg",
"https://i.imgur.com/99PawFE.jpeg",
"https://i.imgur.com/MHleQlJ.jpeg",
"https://i.imgur.com/6JZWbD2.jpeg",
"https://i.imgur.com/OmMct88.jpeg",
"https://i.imgur.com/1gz06TW.jpeg",
"https://i.imgur.com/IsGDf5E.jpeg",
"https://i.imgur.com/IGHeH19.jpeg",
"https://i.imgur.com/qfueZZm.jpeg",
"https://i.imgur.com/bVSiHjR.jpeg",
"https://i.imgur.com/2O6aH1Z.jpeg",
"https://i.imgur.com/4i96UxF.jpeg",
"https://i.imgur.com/24oiZHk.jpeg",
"https://i.imgur.com/eFmlMU4.jpeg",
"https://i.imgur.com/vgT4cLH.jpeg",
"https://i.imgur.com/uJNed50.jpeg",
"https://i.imgur.com/f4gJbGR.jpeg",
"https://i.imgur.com/Qp6o6in.jpeg",
"https://i.imgur.com/smexXmR.jpeg",
"https://i.imgur.com/JU5L82n.jpeg",
"https://i.imgur.com/F6DoxdD.jpeg",
"https://i.imgur.com/7GLyyY0.jpeg",
"https://i.imgur.com/QhlfFAY.jpeg",
"https://i.imgur.com/eiNDQ40.jpeg",
"https://i.imgur.com/Shli9EX.jpeg",
"https://i.imgur.com/s8AmPAL.jpeg",
"https://i.imgur.com/q1MhXTA.jpeg",
"https://i.imgur.com/SjJEqov.jpeg",
"https://i.imgur.com/VYmJWGx.jpeg",
"https://i.imgur.com/xaBk4dt.jpeg",
"https://i.imgur.com/wnVt4Xb.jpeg",
"https://i.imgur.com/2wVjaAw.jpeg",
"https://i.imgur.com/HWC1gOG.jpeg",
"https://i.imgur.com/rklP2OY.jpeg",
"https://i.imgur.com/aYL3mt0.jpeg",
"https://i.imgur.com/RNb2yR1.jpeg",
"https://i.imgur.com/2ZMeWJI.jpeg",
"https://i.imgur.com/Uk2xcyf.jpeg",
"https://i.imgur.com/zrSlp5l.jpeg", 
"https://i.imgur.com/nXbPCpe.jpeg",
"https://i.imgur.com/sRobKeK.jpeg",
"https://i.imgur.com/ZYh637M.jpeg",
"https://i.imgur.com/wZwBQTH.jpeg",
"https://i.imgur.com/BxBQ9yZ.jpeg",
"https://i.imgur.com/qeo4RhQ.jpeg",
"https://i.imgur.com/TNbMcBN.jpeg",
"https://i.imgur.com/ELVwXEF.jpeg",
"https://i.imgur.com/BQqhQnW.jpeg",
"https://i.imgur.com/VGZnS4C.jpeg",
"https://i.imgur.com/T5nRrfP.jpeg",
"https://i.imgur.com/CBz0eS4.jpeg",
"https://i.imgur.com/Yl1MOPx.jpeg",
"https://i.imgur.com/Pzz1Vhv.jpeg",
"https://i.imgur.com/1WGdwFM.jpeg",
"https://i.imgur.com/3bMFgcj.jpeg",
"https://i.imgur.com/JnwMs6C.jpeg",
"https://i.imgur.com/Ivh7bsM.jpeg",
"https://i.imgur.com/R81urCj.jpeg",
"https://i.imgur.com/3m233I9.jpeg",
"https://i.imgur.com/VsGBmE2.jpeg",
"https://i.imgur.com/JZ3fe6Z.jpeg",
"https://i.imgur.com/N9muJiS.jpeg",
"https://i.imgur.com/N9muJiS.jpeg",
"https://i.imgur.com/rw1Rmsy.jpeg",
"https://i.imgur.com/ubdZvcB.jpeg",
"https://i.imgur.com/kWwbMfI.jpeg",
"https://i.imgur.com/kdtGVTV.jpeg",
"https://i.imgur.com/rtM5d0t.jpeg",
"https://i.imgur.com/Z8C9wr3.jpeg",
"https://i.imgur.com/zYUYzHv.jpeg",
"https://i.imgur.com/eA5FNii.jpeg",
"https://i.imgur.com/Y2fgj7j.jpeg",
"https://i.imgur.com/FoxnPun.jpeg",
"https://i.imgur.com/D8LME1X.jpeg",
"https://i.imgur.com/pgxQrw8.jpeg",
"https://i.imgur.com/GcKhLrF.jpeg",
"https://i.imgur.com/bhrqBY0.jpeg",
"https://i.imgur.com/9KUcSRG.jpeg",
"https://i.imgur.com/5EwUiGH.jpeg",
"https://i.imgur.com/Yiv1ijb.jpeg ",
"https://i.imgur.com/tEwkUs5.jpeg",
"https://i.imgur.com/5DNPdPY.jpeg",
"https://i.imgur.com/xjClZNh.jpeg",
"https://i.imgur.com/rOyGe8P.jpeg",
"https://i.imgur.com/Cx2XRur.jpeg",
"https://i.imgur.com/H3MJHU2.jpeg",
"https://i.imgur.com/7FqmMWQ.jpeg",
"https://i.imgur.com/ZwfQglq.jpeg",
"https://i.imgur.com/sgUSUtt.jpeg",
"https://i.imgur.com/5G81Rin.jpeg",
"https://i.imgur.com/WwS30bL.jpeg", 
"https://i.imgur.com/gWNPLeb.jpeg",
"https://i.imgur.com/jsNasAf.jpeg",
"https://i.imgur.com/EO1BBQf.jpeg",
"https://i.imgur.com/o0oV515.jpeg",
"https://i.imgur.com/wXdDVKv.jpeg",
"https://i.imgur.com/FLKiMjD.jpeg",
"https://i.imgur.com/W7JRbIo.jpeg",
"https://i.imgur.com/7FrgtA1.jpeg",
"https://i.imgur.com/KmFDSS4.jpeg",
"https://i.imgur.com/LLOBtda.jpeg",
"https://i.imgur.com/8PBTSJW.jpeg",
"https://i.imgur.com/4MWBESb.jpeg",
"https://i.imgur.com/TZwVX04.jpeg",
"https://i.imgur.com/tzFmqA9.jpeg",
"https://i.imgur.com/mf0IrJq.jpeg",
"https://i.imgur.com/G5n86FF.jpeg",
"https://i.imgur.com/1V9Gg4s.jpeg",
"https://i.imgur.com/B8oaJXd.jpeg",
"https://i.imgur.com/2O9dXVs.jpeg",
"https://i.imgur.com/zZ3VMkh.jpeg",
"https://i.imgur.com/4W85TL1.jpeg",
"https://i.imgur.com/eaOMjUe.jpeg",
"https://i.imgur.com/LLCEzOu.jpeg",
"https://i.imgur.com/g6FHDRk.jpeg",
"https://i.imgur.com/3WebvUL.jpeg",
"https://i.imgur.com/mamhnlb.jpeg",
"https://i.imgur.com/EuHqBJt.jpeg",
"https://i.imgur.com/jXeh4X7.jpeg",
"https://i.imgur.com/qPeLUD0.jpeg",
"https://i.imgur.com/6V9DU7W.jpeg",
"https://i.imgur.com/33XlkYO.jpeg",
"https://i.imgur.com/T3Oq4VT.jpeg",
"https://i.imgur.com/6ktBG8K.jpeg",
"https://i.imgur.com/mMht7ZP.jpeg",
"https://i.imgur.com/XrB8Tbb.jpeg",
"https://i.imgur.com/8cInq8l.jpeg",
"https://i.imgur.com/ucXcu5Q.jpeg",
"https://i.imgur.com/egwcscq.jpeg",
"https://i.imgur.com/CP3Pi1L.jpeg",
"https://i.imgur.com/duY3ixI.jpeg",
"https://i.imgur.com/SdXlJ5S.jpeg",
"https://i.imgur.com/zenPh25.jpeg",
"https://i.imgur.com/cuJONSg.jpeg",
"https://i.imgur.com/3Kj3KQp.jpeg",
"https://i.imgur.com/iLdDcAy.jpeg",
"https://i.imgur.com/Wy8vZwp.jpeg",
"https://i.imgur.com/acE5x36.jpeg",
"https://i.imgur.com/xAlSWgq.jpeg",
"https://i.imgur.com/1xlFC3H.jpeg",
"https://i.imgur.com/4KC3tHa.jpeg",
"https://i.imgur.com/GZsS7NN.jpeg",
"https://i.imgur.com/Mh0MEB5.jpeg",
"https://i.imgur.com/r1Rh4WX.jpeg",
"https://i.imgur.com/mA5RjS0.jpeg",
"https://i.imgur.com/ru8rrVT.jpeg",
"https://i.imgur.com/i4Olitl.jpeg",
"https://i.imgur.com/HuY3Mkq.jpeg",
"https://i.imgur.com/5Exg4dh.jpeg",
"https://i.imgur.com/0r1dfQC.jpeg",
"https://i.imgur.com/XYtE3I1.jpeg",
"https://i.imgur.com/7aLuY7v.jpeg",
"https://i.imgur.com/HS9xi73.jpeg",
"https://i.imgur.com/x6n0PWT.jpeg",
"https://i.imgur.com/hGQ0Co5.jpeg",
"https://i.imgur.com/yUgf6KL.jpeg",
"https://i.imgur.com/szOgRCq.jpeg",
"https://i.imgur.com/O2LiqEy.jpeg",
"https://i.imgur.com/o3y1cJZ.jpeg",
"https://i.imgur.com/5zEegBB.jpeg",
"https://i.imgur.com/OUEIsmc.jpeg",
"https://i.imgur.com/UGX5rIn.jpeg",
"https://i.imgur.com/Dps7un6.jpeg",
"https://i.imgur.com/2sj1nun.jpeg",
"https://i.imgur.com/ZgyxqCR.jpeg",
"https://i.imgur.com/rv768Bz.jpeg",
"https://i.imgur.com/1zOvg9o.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 10) api.sendMessage("Bạn cần 10 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`Ảnh về lớp học biết tuốt\nSố Ảnh: ${link.length}\n-10 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };