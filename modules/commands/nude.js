module.exports.config = {
  name: "nude​​",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Quốc Vinh (Vinhbeat)",
  description: "Image",
  commandCategory: "Image",
  usages: "[Ảnh Nude]",
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
"https://imgur.com/ZDITUdv.jpg",
"https://imgur.com/QAZuZLc.jpg",
"https://imgur.com/vXlsiyK.jpg",
"https://imgur.com/Ev5yBE9.jpg",
"https://imgur.com/rsKQHRX.jpg",
"https://imgur.com/p98lB2I.jpg",
"https://imgur.com/9EzIQm7.jpg",
"https://imgur.com/bJUmVkQ.jpg",
"https://imgur.com/LIbrSCE.jpg",
"https://imgur.com/Z2Wu77T.jpg",
"https://imgur.com/KapWbhH.jpg",
"https://imgur.com/4DrUCgF.jpg",
"https://imgur.com/pit2PD7.jpg",
"https://imgur.com/UZvnaYv.jpg",
"https://imgur.com/eTN7i1V.jpg",
"https://imgur.com/RugY7kB.jpg",
"https://imgur.com/0NwhOsc.jpg",
"https://imgur.com/NSzL0Qr.jpg",
"https://imgur.com/DE0i5Yz.jpg",
"https://imgur.com/A3lsuOL.jpg",
"https://imgur.com/34akdUQ.jpg",
"https://imgur.com/kecEQcP.jpg",
"https://imgur.com/ROSavs1.jpg",
"https://imgur.com/8ENPJC3.jpg",
"https://imgur.com/KFOH63d.jpg",
"https://imgur.com/T927hv7.jpg",
"https://imgur.com/oMiHwvN.jpg",
"https://imgur.com/hckIWqq.jpg",
"https://imgur.com/Rm8hhnq.jpg",
"https://imgur.com/gUjvY4Y.jpg",
"https://imgur.com/Yp1czm1.jpg",
"https://imgur.com/lTvizmC.jpg",
"https://imgur.com/47Mrfjp.jpg",
"https://imgur.com/mEblmNu.jpg",
"https://imgur.com/afBbZV9.jpg",
"https://imgur.com/jMzUMjy.jpg",
"https://imgur.com/4xgEsXj.jpg",
"https://imgur.com/vsOF3NR.jpg",
"https://imgur.com/GISCGmr.jpg",
"https://imgur.com/f8iHETy.jpg",
"https://imgur.com/aB4LNr8.jpg",
"https://imgur.com/h3sVDuL.jpg",
"https://imgur.com/gHbAtqF.jpg",
"https://imgur.com/69o0xyB.jpg",
"https://imgur.com/1JzJOf6.jpg",
"https://imgur.com/zSHNgl2.jpg",
"https://imgur.com/yXI8hPB.jpg",
"https://imgur.com/4dvzjfE.jpg",
"https://imgur.com/9tuZHgn.jpg",
"https://imgur.com/Qc3S6Wf.jpg",
"https://imgur.com/Q1fRfnT.jpg",
"https://imgur.com/ZDITUdv.jpg",
"https://imgur.com/QAZuZLc.jpg",
"https://imgur.com/vXlsiyK.jpg",
"https://imgur.com/Ev5yBE9.jpg",
"https://imgur.com/rsKQHRX.jpg",
"https://imgur.com/p98lB2I.jpg",
"https://imgur.com/9EzIQm7.jpg",
"https://imgur.com/bJUmVkQ.jpg",
"https://imgur.com/LIbrSCE.jpg",
"https://imgur.com/Z2Wu77T.jpg",
"https://imgur.com/KapWbhH.jpg",
"https://imgur.com/4DrUCgF.jpg",
"https://imgur.com/pit2PD7.jpg",
"https://imgur.com/UZvnaYv.jpg",
"https://imgur.com/eTN7i1V.jpg",
"https://imgur.com/RugY7kB.jpg",
"https://imgur.com/0NwhOsc.jpg",
"https://imgur.com/NSzL0Qr.jpg",
"https://imgur.com/DE0i5Yz.jpg",
"https://imgur.com/A3lsuOL.jpg",
"https://imgur.com/34akdUQ.jpg",
"https://imgur.com/kecEQcP.jpg",
"https://imgur.com/ROSavs1.jpg",
"https://imgur.com/8ENPJC3.jpg",
"https://imgur.com/KFOH63d.jpg",
"https://imgur.com/T927hv7.jpg",
"https://imgur.com/oMiHwvN.jpg",
"https://imgur.com/hckIWqq.jpg",
"https://imgur.com/Rm8hhnq.jpg",
"https://imgur.com/gUjvY4Y.jpg",
"https://imgur.com/Yp1czm1.jpg",
"https://imgur.com/lTvizmC.jpg",
"https://imgur.com/47Mrfjp.jpg",
"https://imgur.com/mEblmNu.jpg",
"https://imgur.com/afBbZV9.jpg",
"https://imgur.com/jMzUMjy.jpg",
"https://imgur.com/4xgEsXj.jpg",
"https://imgur.com/vsOF3NR.jpg",
"https://imgur.com/GISCGmr.jpg",
"https://imgur.com/f8iHETy.jpg",
"https://imgur.com/aB4LNr8.jpg",
"https://imgur.com/h3sVDuL.jpg",
"https://imgur.com/gHbAtqF.jpg",
"https://imgur.com/69o0xyB.jpg",
"https://imgur.com/1JzJOf6.jpg",
"https://imgur.com/zSHNgl2.jpg",
"https://imgur.com/yXI8hPB.jpg",
"https://imgur.com/4dvzjfE.jpg",
"https://imgur.com/9tuZHgn.jpg",
"https://imgur.com/Qc3S6Wf.jpg",
"https://imgur.com/Q1fRfnT.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_0046.jpg;\r\nhttps://s1.uphinh.org/2021/05/14/IMG_0047.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_0048.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_0049.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_0051.jpg,https://s1.uphinh.org/2021/05/14/IMG_4116.jpg",
"https://s1.uphinh.org/2021/05/14/172a2c60d185f0ff0.jpg",
"https://s1.uphinh.org/2021/05/14/1602x2400_1b4faa50631bd4d5d9483f0a361e89b601adc6b265c124b8.jpg",
"https://s1.uphinh.org/2021/05/14/1618x1000_07754e9f3e1bf7a42474beabdd5eeb9da20244ada645f736.jpg",
"https://s1.uphinh.org/2021/05/14/2000x3000_8cf4eaea990a54fdd89e25254fbda354ab08f256696f1ba3.jpg",
"https://s1.uphinh.org/2021/05/14/2400x1600_4331eae8cfbad4b2bd1feded526a3184ef857ed351b14eb8.jpg",
"https://s1.uphinh.org/2021/05/14/2400x1600_34774adfc8ece290d13783c179b64203.jpg",
"https://s1.uphinh.org/2021/05/14/3200x1800_2e6ca3d6de294357e69168fe9f72fc74.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-10.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-15.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-16-2.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-22.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-44.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-54.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-41-26.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_23-59-1763cfcfe7ed904bf6.jpg",
"https://s1.uphinh.org/2021/05/14/3.jpg",
"https://s1.uphinh.org/2021/05/14/4.jpg",
"https://s1.uphinh.org/2021/05/14/6.jpg",
"https://s1.uphinh.org/2021/05/14/8.jpg",
"https://s1.uphinh.org/2021/05/14/9.jpg",
"https://s1.uphinh.org/2021/05/14/10.jpg",
"https://s1.uphinh.org/2021/05/14/12.jpg",
"https://s1.uphinh.org/2021/05/14/1350x2400_9aa16265a507803b86349e7d81b35959.jpg",
"https://s1.uphinh.org/2021/05/14/1500x2400_7c2771e5f49f43c209b0df4a04ef8606.jpg",
"https://s1.uphinh.org/2021/05/14/1500x2400_93c5bc18067d170d30a4af4e93be2faf.jpg",
"https://s1.uphinh.org/2021/05/14/1500x2400_1026c39d2f1d168c223470717d53a93b.jpg",
"https://s1.uphinh.org/2021/05/14/1500x2400_b23af379d7041c29854b5f1c77c3d7f7.jpg",
"https://s1.uphinh.org/2021/05/14/2000x3000_1c2f1e6597ffcb0b93a8bad5ed38ae8d.jpg",
"https://s1.uphinh.org/2021/05/14/2000x3200_43632c00d4abb9806979e091c34b63d2.jpg",
"https://s1.uphinh.org/2021/05/14/2000x3200_abb0524eb19d695ce7cddd491c206ddb.jpg",
"https://s1.uphinh.org/2021/05/14/2100x900_74eef002650ec3308f10689946df80f6.jpg",
"https://s1.uphinh.org/2021/05/14/2400x1500_6c20aae8db9eb5e6d761434cd6fd7300.jpg",
"https://s1.uphinh.org/2021/05/14/2400x1500_624134d34a5ff17b1ff71c8bc10d36c3.jpg",
"https://s1.uphinh.org/2021/05/14/2400x1600_233ec55ca6f812dcc8a2f4e11095db92.jpg",
"https://s1.uphinh.org/2021/05/14/3154x3154_897c00372a02fd3744d32086fb58447c.jpg",
"https://s1.uphinh.org/2021/05/14/image0.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_0045.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_0051.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4116.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4118.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4119.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4120.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4121.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4122.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4123.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4124.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4125.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4186.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4187.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4188.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4189.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4190.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4192.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4194.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4195.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4196.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4197.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4199.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4200.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4202.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4204.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4205.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4207.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4210.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4212.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4214.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4215.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4216.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4218.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4219.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4220.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4221.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4222.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4223.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4224.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4225.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4226.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4227.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4228.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4229.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4230.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4231.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4232.jpg",
"https://s1.uphinh.org/2021/05/14/IMG_4233.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-52-27.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-01.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-02.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-04.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-05.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-07.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-08.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-54-10.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_20-57-50.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-32-05.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-33-25.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-33-29.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-33-41.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-33-43.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-33-44.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-34-50.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-34-53.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-34-55.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-34-57.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-34-58.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-34-59.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-00.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-03.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-04.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-06.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-14.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-16.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-17.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-20.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-22.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-35-32.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-09.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-11.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-12.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-13.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-16.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-17.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-19.jpg\r\n",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-20.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-21.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-23.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-24.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-25.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-26.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-27.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-28.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-30.jpg\r\n",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-31.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-32.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-33.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-36.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-37.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-40.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-41.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-43.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-45.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-46.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-48.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-49.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-50.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-51.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-52.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-55.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-56.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-57-2.jpg",
"https://s1.uphinh.org/2021/05/14/photo_2021-04-27_22-40-57.jpg",
"https://imgur.com/LFeq4om",
"https://imgur.com/31ijLVg",
"https://imgur.com/IwXaqKg",
"https://imgur.com/mT8uqAe",
"https://imgur.com/L0C5PcE",
"https://imgur.com/xjUk1to",
"https://imgur.com/oBZcXPk",
"https://imgur.com/ccKk4H1",
"https://imgur.com/A6lbbmZ",
"https://imgur.com/UdncgyS",
"https://imgur.com/QhZi8MO",
"https://imgur.com/eb1SWQS",
"https://imgur.com/fmuFk4m",
"https://imgur.com/ozhMd2q",
"https://imgur.com/u3yIqeW",
"https://imgur.com/nzeVJsg",
"https://imgur.com/3dhBaN6",
"https://imgur.com/ua0balo",
"https://imgur.com/xsPEmUm",
"https://imgur.com/zFNBnYf",
"https://imgur.com/onIhadc",
"https://imgur.com/S60ITIB",
"https://imgur.com/WCrb6Bc",
"https://imgur.com/PxhgYkD",
"https://imgur.com/JzRu6Ak",
"https://imgur.com/2SZxxRD",
"https://imgur.com/O8sAyor",
"https://imgur.com/imk4fEU",
"https://imgur.com/SDPURnO",
"https://imgur.com/sYPSO7l",
"https://imgur.com/Who6xc0",
"https://imgur.com/nECYBa9",
"https://imgur.com/8BblgMn",
"https://imgur.com/kWEvzJg",
"https://imgur.com/VlMsam1",
"https://imgur.com/q0La8KB.png",
"https://imgur.com/O23NF5O",
"https://imgur.com/8kVXAZO",
"https://imgur.com/GmSASPR",

     ];
     var callback = () => api.sendMessage({body:`Ảnh của bạn đây...`,attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gai.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };
