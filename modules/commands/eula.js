module.exports.config = {
  name: "eula",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh Eula Lawrence",
  commandCategory: "genshin impact",
  usages: "eula",
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
  "https://i.imgur.com/aoVXad9.jpeg",
  "https://i.imgur.com/L5CgLlm.jpeg",
  "https://i.imgur.com/vP1hTmD.jpeg",
  "https://i.imgur.com/0fH0XX7.jpeg",
  "https://i.imgur.com/4aaTjlf.jpeg",
  "https://i.imgur.com/duY7Pb1.jpeg",
  "https://i.imgur.com/HL3S4Oa.jpeg",
  "https://i.imgur.com/udKWsto.jpeg",
  "https://i.imgur.com/zGDZkZb.jpeg",
  "https://i.imgur.com/O0pFGRv.jpeg",
  "https://i.imgur.com/JbNzVBm.jpeg",
  "https://i.imgur.com/BgDNHXF.jpeg",
  "https://i.imgur.com/eVeHVm4.jpeg",
  "https://i.imgur.com/w1VQiRV.jpeg",
  "https://i.imgur.com/KjhhaAF.jpeg",
  "https://i.imgur.com/Jkd0y88.jpeg",
  "https://i.imgur.com/9yzh8GT.jpeg",
  "https://i.imgur.com/dw3BASf.jpeg",
  "https://i.imgur.com/h8xmw7T.jpeg",
  "https://i.imgur.com/U7UuELe.jpeg",
  "https://i.imgur.com/OtLclGX.jpeg",
  "https://i.imgur.com/qrPJqvG.jpeg",
  "https://i.imgur.com/QNwZkq1.jpeg",
  "https://i.imgur.com/ZelR1xH.jpeg",
  "https://i.imgur.com/BtS5tl7.jpeg",
  "https://i.imgur.com/DwlBZJk.jpeg",
  "https://i.imgur.com/ejv1E61.jpeg",
  "https://i.imgur.com/9xufs5f.jpeg",
  "https://i.imgur.com/mLGaLWd.jpeg",
  "https://i.imgur.com/oJPqd3P.jpeg",
  "https://i.imgur.com/PN0j1Zj.jpeg",
  "https://i.imgur.com/wSbVxM2.jpeg",
  "https://i.imgur.com/mp48Vv8.jpeg",
  "https://i.imgur.com/ngTJwMC.jpeg",
  "https://i.imgur.com/EByHSEO.jpeg",
  "https://i.imgur.com/8K5R7EK.jpeg",
  "https://i.imgur.com/jxLtlqo.jpeg",
  "https://i.imgur.com/XbmLodQ.jpeg",
  "https://i.imgur.com/cBQwfwf.jpeg",
  "https://i.imgur.com/KT8ggn7.jpeg",
  "https://i.imgur.com/FhpMWMv.jpeg",
  "https://i.imgur.com/46VbMZB.jpeg",
  "https://i.imgur.com/JpAyiqE.jpeg",
  "https://i.imgur.com/J4ILk4S.jpeg",
  "https://i.imgur.com/TyanvsQ.jpeg",
  "https://i.imgur.com/cdeyWSb.jpeg",
  "https://i.imgur.com/SpZ1mZ5.jpeg",
  "https://i.imgur.com/wkLSG1X.jpeg",
  "https://i.imgur.com/3J9GdM6.jpeg",
  "https://i.imgur.com/SDGeOEQ.jpeg",
  "https://i.imgur.com/NzrVYvu.jpg",
  "https://i.imgur.com/jkmJ0Id.jpeg",
  "https://i.imgur.com/fXAoooZ.jpeg",
  "https://i.imgur.com/pJHXICy.jpeg",
  "https://i.imgur.com/CST3xI1.jpeg",
  "https://i.imgur.com/8lLYHD5.jpeg",
  "https://i.imgur.com/SvkX6Af.jpeg",
  "https://i.imgur.com/y01WecG.jpeg",
  "https://i.imgur.com/DS7hECi.jpeg",
  "https://i.imgur.com/0GxLkHR.jpeg",
  "https://i.imgur.com/lH6WSP9.jpeg",
  "https://i.imgur.com/PglH9DT.jpeg",
  "https://i.imgur.com/BJVqi3X.jpeg",
  "https://i.imgur.com/yvshhj9.jpeg",
  "https://i.imgur.com/NjDAG57.jpeg",
  "https://i.imgur.com/0iM1QdE.jpeg",
  "https://i.imgur.com/92v5i7f.jpeg",
  "https://i.imgur.com/MW1ySlZ.jpeg",
  "https://i.imgur.com/faDoKD8.jpeg",
  "https://i.imgur.com/0NaQdIA.jpeg",
  "https://i.imgur.com/ldhkA7T.jpeg",
  "https://i.imgur.com/rnEEVoU.jpeg",
  "https://i.imgur.com/UANIFOs.jpeg",
  "https://i.imgur.com/nfJmZyL.jpeg",
  "https://i.imgur.com/zu108n0.jpeg",
  "https://i.imgur.com/f09izZS.jpeg",
  "https://i.imgur.com/44KXlV1.jpeg",
  "https://i.imgur.com/crHlTXM.jpeg",
  "https://i.imgur.com/WF9ho0m.jpeg",
  "https://i.imgur.com/uUekUOy.jpeg",
  "https://i.imgur.com/5TwNii0.jpeg",
  "https://i.imgur.com/dDBrv8R.jpeg",
  "https://i.imgur.com/mBgAA0s.jpeg",
  "https://i.imgur.com/3sgniuR.jpeg",
  "https://i.imgur.com/zHBQ4NR.jpeg",
  "https://i.imgur.com/TvHuxUT.jpeg",
  "https://i.imgur.com/0Ayg7WY.jpeg",
   "https://i.imgur.com/uoe1lrv.jpeg",
  "https://i.imgur.com/7x7NixZ.jpeg",
  "https://i.imgur.com/P5BF2Cf.jpeg",
  "https://i.imgur.com/1yo0hui.jpeg",
  "https://i.imgur.com/L4j4G4w.jpeg",
  "https://i.imgur.com/otAegsv.jpeg",
  "https://i.imgur.com/UT1TRZ2.jpeg",
  "https://i.imgur.com/9w7wSL7.jpeg",
  "https://i.imgur.com/yxzS45P.jpeg",
  "https://i.imgur.com/lcnbw5f.jpeg",
  "https://i.imgur.com/rDIN79l.jpeg",
  "https://i.imgur.com/k4xw3st.jpeg",
  "https://i.imgur.com/UdkTrHP.jpeg",
  "https://i.imgur.com/6fpVtzB.jpeg",
  "https://i.imgur.com/WFJtp9f.jpeg",
  "https://i.imgur.com/Z7HM2Wu.jpeg",
  "https://i.imgur.com/WTgOd9S.jpeg",
  "https://i.imgur.com/R7pqdFz.jpeg",
  "https://i.imgur.com/VbHopGG.jpeg",
  "https://i.imgur.com/B4BJijV.jpeg",
  "https://i.imgur.com/jDxMljK.jpeg",
  "https://i.imgur.com/aABWp61.jpeg",
  "https://i.imgur.com/sUkKIne.jpeg",
  "https://i.imgur.com/tH5eGbz.jpeg",
  "https://i.imgur.com/1TfmHkG.jpeg",
  "https://i.imgur.com/yuaADFg.jpeg",
  "https://i.imgur.com/xxySWHi.jpeg",
  "https://i.imgur.com/Rac61Hp.jpeg",
  "https://i.imgur.com/6wfs7AO.jpeg",
  "https://i.imgur.com/IKTWnuD.jpeg",
  "https://i.imgur.com/JvlB6v7.jpeg",
  "https://i.imgur.com/A3OMxMl.jpeg",
  "https://i.imgur.com/pcbuIzC.jpeg",
  "https://i.imgur.com/eOLD4Yj.jpeg",
  "https://i.imgur.com/JWNJFcz.jpeg",
  "https://i.imgur.com/bdn3Fiw.jpeg",
  "https://i.imgur.com/9p8WwpQ.jpeg",
  "https://i.imgur.com/QsnB46m.jpeg",
  "https://i.imgur.com/N7giaVl.jpeg",
  "https://i.imgur.com/sIaQEKU.jpeg",
  "https://i.imgur.com/PCTZekh.jpeg",
  "https://i.imgur.com/ODFAmJs.jpeg",
  "https://i.imgur.com/90w71SX.jpeg",
  "https://i.imgur.com/TezbI3R.jpeg",
  "https://i.imgur.com/NxKaiOh.jpeg",
  "https://i.imgur.com/HyK4WPR.jpeg",
  "https://i.imgur.com/zE4y57r.jpeg",
  "https://i.imgur.com/dtJ0FCH.jpeg",
  "https://i.imgur.com/WYaUXCl.jpeg",
  "https://i.imgur.com/PcmJU2A.jpeg",
  "https://i.imgur.com/JZttaJN.jpeg",
  "https://i.imgur.com/hCgmNgR.jpeg",
  "https://i.imgur.com/y1XAYVQ.jpeg",
  "https://i.imgur.com/9icjs19.jpeg",
  "https://i.imgur.com/a8cdlJY.jpeg",
  "https://i.imgur.com/NmZgChG.jpeg",
  "https://i.imgur.com/ofdbXab.jpeg",
  "https://i.imgur.com/IwaR3Yl.jpeg",
  "https://i.imgur.com/l7s4xoQ.jpeg",
  "https://i.imgur.com/QtOpLrF.jpeg",
  "https://i.imgur.com/DtZHOl4.jpeg",
  "https://i.imgur.com/Ec9ZBBI.jpeg",
  "https://i.imgur.com/PkDHI4c.jpg",
  "https://i.imgur.com/JOqxgrU.jpg",
  "https://i.imgur.com/71kqGtS.jpg",
   "https://i.imgur.com/BEHa8n7.jpeg",
  "https://i.imgur.com/0tGKlRe.jpeg",
  "https://i.imgur.com/F6M0Ddi.jpeg",
  "https://i.imgur.com/wkmkpNj.jpeg",
  "https://i.imgur.com/kJijtO2.jpeg",
  "https://i.imgur.com/PFVN7jc.jpeg",
  "https://i.imgur.com/9BBiS2o.jpeg",
  "https://i.imgur.com/R05Nsd3.jpeg",
  "https://i.imgur.com/wiZUfp8.jpeg",
  "https://i.imgur.com/cvJEalm.jpeg",
  "https://i.imgur.com/9fPk3xG.jpeg",
  "https://i.imgur.com/xewvSbS.jpeg",
  "https://i.imgur.com/oP5hpFI.jpeg",
  "https://i.imgur.com/Z8Atc5C.jpeg",
  "https://i.imgur.com/ouSaRwv.jpeg",
  "https://i.imgur.com/w5FU6Ls.jpeg",
  "https://i.imgur.com/qeZgXuA.jpeg",
  "https://i.imgur.com/IVgTZCb.jpeg",
  "https://i.imgur.com/H2knBRr.jpeg",
  "https://i.imgur.com/itOFnHt.jpeg",
  "https://i.imgur.com/OchlI4J.jpeg",
  "https://i.imgur.com/Cei3bps.jpeg",
  "https://i.imgur.com/kz2y6hW.jpeg",
  "https://i.imgur.com/9783CYi.jpeg",
  "https://i.imgur.com/HtNlF3w.jpeg",
  "https://i.imgur.com/5fCRwI5.jpeg",
  "https://i.imgur.com/oiUgDVI.jpeg",
  "https://i.imgur.com/e6MfMoY.jpeg",
  "https://i.imgur.com/9EVb1fw.jpeg",
  "https://i.imgur.com/SqdB5Gw.jpeg",
  "https://i.imgur.com/i0up8JN.jpeg",
  "https://i.imgur.com/z6ewYjy.jpeg",
  "https://i.imgur.com/8mwL8cX.jpeg",
  "https://i.imgur.com/99MYAGF.jpeg",
  "https://i.imgur.com/wZXA5Tm.jpeg",
  "https://i.imgur.com/Z1Weia5.jpeg",
  "https://i.imgur.com/Hctss8S.jpeg",
  "https://i.imgur.com/3fonCy5.jpeg",
  "https://i.imgur.com/kmvOfD9.jpeg",
  "https://i.imgur.com/KyujFIQ.jpeg",
  "https://i.imgur.com/0N3sSWk.jpeg",
  "https://i.imgur.com/extrtWo.jpeg",
  "https://i.imgur.com/tDkiWuh.jpeg",
  "https://i.imgur.com/sjF07v5.jpeg",
  "https://i.imgur.com/f4UdBYc.jpeg",
  "https://i.imgur.com/NrnpGr4.jpg",
  "https://i.imgur.com/aArwnqZ.jpg",
  "https://i.imgur.com/Zhjrfju.jpg",
  "https://i.imgur.com/rsD4n6w.jpeg",
  "https://i.imgur.com/iBhhNcM.jpeg",
  "https://i.imgur.com/mDdMdWo.jpeg",
  "https://i.imgur.com/2uF2ANj.jpeg",
  "https://i.imgur.com/5uzlNKH.jpeg",
  "https://i.imgur.com/LeBUyDA.jpeg",
  "https://i.imgur.com/PP90oXP.jpeg",
  "https://i.imgur.com/QfDH2EC.jpeg",
  "https://i.imgur.com/9hI303F.jpeg",
  "https://i.imgur.com/N01gdzs.jpeg",
  "https://i.imgur.com/VVzb5mC.jpeg",
  "https://i.imgur.com/czQHYrM.jpeg",
  "https://i.imgur.com/mA8Xi0Q.jpeg",
  "https://i.imgur.com/U2Dy6Cg.jpeg",
  "https://i.imgur.com/2nCUrw4.jpeg",
  "https://i.imgur.com/zFyY0ug.jpeg",
  "https://i.imgur.com/uKfzMTZ.jpeg",
  "https://i.imgur.com/vh9TLYw.jpeg",
  "https://i.imgur.com/cNmLdPo.jpeg",
  "https://i.imgur.com/t3945aA.jpeg",
  "https://i.imgur.com/A57utcc.jpeg",
  "https://i.imgur.com/j9we7Pr.jpeg",
  "https://i.imgur.com/wT5qiaF.jpeg",
  "https://i.imgur.com/UpaCtmP.jpeg",
  "https://i.imgur.com/sKuHWYa.jpeg",
  "https://i.imgur.com/ESce5q6.jpeg",
  "https://i.imgur.com/OOO0FqF.jpeg",
  "https://i.imgur.com/Mh5LZ69.jpeg",
  "https://i.imgur.com/JhLwimj.jpeg",
  "https://i.imgur.com/vUzIZG7.jpeg",
  "https://i.imgur.com/4NruTnT.jpeg",
  "https://i.imgur.com/TLzl24q.jpeg",
  "https://i.imgur.com/t5aQMqs.jpeg",
  "https://i.imgur.com/olocNl8.jpeg",
  "https://i.imgur.com/9PGD2Jk.jpeg",
  "https://i.imgur.com/w09vSml.jpeg",
  "https://i.imgur.com/dFjulIW.jpeg",
  "https://i.imgur.com/uL0nR4u.jpeg",
  "https://i.imgur.com/kPibxcx.jpeg",
  "https://i.imgur.com/a0NPlZX.jpeg",
  "https://i.imgur.com/eJ0bbxg.jpeg",
  "https://i.imgur.com/OwgV8Fo.jpeg",
  "https://i.imgur.com/uMptiHQ.jpeg",
  "https://i.imgur.com/cI3G7gc.jpeg",
  "https://i.imgur.com/qYK4sL9.jpeg",
  "https://i.imgur.com/pXdF7mL.jpeg",
  "https://i.imgur.com/BNwsIvI.jpeg",
  "https://i.imgur.com/O6RED5j.jpeg",
  "https://i.imgur.com/9r2jCaW.jpeg",
  "https://i.imgur.com/LrJmVV1.jpeg",
  "https://i.imgur.com/2WvoL5n.jpeg",
  "https://i.imgur.com/TPXbKzl.jpeg",
  "https://i.imgur.com/39iob4i.jpeg",
  "https://i.imgur.com/ftX5S5V.jpeg",
  "https://i.imgur.com/mUoEbYM.jpeg",
  "https://i.imgur.com/a1w9Cvo.jpeg",
  "https://i.imgur.com/FIcW7wB.jpeg",
  "https://i.imgur.com/yObuj7T.jpeg",
  "https://i.imgur.com/xBcJTgM.jpeg",
  "https://i.imgur.com/rt40wbs.jpeg",
  "https://i.imgur.com/TxLxeCc.jpeg",
  "https://i.imgur.com/UlCjCes.jpeg",
  "https://i.imgur.com/0zggeZb.jpeg",
  "https://i.imgur.com/vNl1JQU.jpeg",
  "https://i.imgur.com/XVYqIml.jpeg",
  "https://i.imgur.com/R973ttn.jpeg",
  "https://i.imgur.com/DSPNiKn.jpeg",
  "https://i.imgur.com/8IWVrvD.jpeg",
  "https://i.imgur.com/1xNRKBg.jpeg",
  "https://i.imgur.com/ZsKnS5X.jpeg",
  "https://i.imgur.com/iEM27WY.jpeg",
  "https://i.imgur.com/M6pYBYk.jpeg",
  "https://i.imgur.com/YmxjAJH.jpeg",
  "https://i.imgur.com/oLMRRRs.jpeg",
  "https://i.imgur.com/5NuG4PU.jpeg",
  "https://i.imgur.com/VYM4f14.jpeg",
  "https://i.imgur.com/aHEq8dx.jpeg",
  "https://i.imgur.com/wu166qx.jpeg",
  "https://i.imgur.com/epZyOSb.jpeg",
  "https://i.imgur.com/ZnAQUbQ.jpeg",
  "https://i.imgur.com/XtGmgho.jpeg",
  "https://i.imgur.com/awO5GDU.jpeg",
  "https://i.imgur.com/R3ChSi1.jpeg",
  "https://i.imgur.com/zvvkIYy.jpeg",
  "https://i.imgur.com/6EyFYJM.jpeg",
  "https://i.imgur.com/NFETN3C.jpeg",
  "https://i.imgur.com/Hm5Tm4d.jpeg",
  "https://i.imgur.com/C8NtqCr.jpeg",
  "https://i.imgur.com/3rSyTWV.jpeg",
  "https://i.imgur.com/DnMwbMZ.jpeg",
  "https://i.imgur.com/PVy1J6u.jpeg",
  "https://i.imgur.com/4yMwYtl.jpeg",
  "https://i.imgur.com/7wbRh6c.jpeg",
  "https://i.imgur.com/NP1qmnW.jpeg",
  "https://i.imgur.com/xN1HAiF.jpeg",
  "https://i.imgur.com/G8F5E2t.jpeg",
  "https://i.imgur.com/Qnn0rix.jpg",
  "https://i.imgur.com/v1kSaiQ.jpg",
  "https://i.imgur.com/nL3roLv.jpg",
  "https://i.imgur.com/t1VH6HO.jpeg",
  "https://i.imgur.com/Vpbb92s.jpeg",
  "https://i.imgur.com/9ombiqI.jpeg",
  "https://i.imgur.com/ruEM4U8.jpeg",
  "https://i.imgur.com/9ycEc8h.jpeg",
  "https://i.imgur.com/Mr4DkHH.jpeg",
  "https://i.imgur.com/mVsNWy6.jpeg",
  "https://i.imgur.com/F30VFhY.jpeg",
  "https://i.imgur.com/JxWJsQC.jpeg",
  "https://i.imgur.com/1asO9I0.jpeg",
  "https://i.imgur.com/vmK9k92.jpeg",
  "https://i.imgur.com/qKAurIC.jpeg",
  "https://i.imgur.com/yOM4J1w.jpeg",
  "https://i.imgur.com/t01VUdU.jpeg",
  "https://i.imgur.com/4BeWrzC.jpeg",
  "https://i.imgur.com/nsX0AUA.jpeg",
  "https://i.imgur.com/Rw29lUl.jpeg",
  "https://i.imgur.com/PYRYpw8.jpeg",
  "https://i.imgur.com/5gkrUwl.jpeg",
  "https://i.imgur.com/I0EXLtR.jpeg",
  "https://i.imgur.com/8kKcBvH.jpeg",
  "https://i.imgur.com/pIB5hbl.jpeg",
  "https://i.imgur.com/ciHtVOQ.jpeg",
  "https://i.imgur.com/q0gYni1.jpeg",
  "https://i.imgur.com/F1JgdgG.jpeg",
  "https://i.imgur.com/JKMzjlE.jpeg",
  "https://i.imgur.com/tCtmpIe.jpeg",
  "https://i.imgur.com/QQA1t2O.jpeg",
  "https://i.imgur.com/3r0BIsf.jpeg",
  "https://i.imgur.com/BPC5zkW.jpeg",
  "https://i.imgur.com/kAh7duq.jpeg",
  "https://i.imgur.com/Aaewzwg.jpeg",
  "https://i.imgur.com/DXFac6D.jpeg",
  "https://i.imgur.com/IiFELrn.jpeg",
  "https://i.imgur.com/krGz3KB.jpeg",
  "https://i.imgur.com/fmKrboc.jpeg",
  "https://i.imgur.com/QD9SKM6.jpeg",
  "https://i.imgur.com/OPvugom.jpeg",
  "https://i.imgur.com/BMTgGaq.jpeg",
  "https://i.imgur.com/cIgOHRb.jpeg",
  "https://i.imgur.com/45iJUEo.jpeg",
  "https://i.imgur.com/PtH4EVW.jpeg",
  "https://i.imgur.com/fAM7DjY.jpeg",
  "https://i.imgur.com/doVppRC.jpeg",
  "https://i.imgur.com/fWmWvLi.jpeg",
  "https://i.imgur.com/KPfRbZS.jpeg",
  "https://i.imgur.com/pt7CLQZ.jpeg",
  "https://i.imgur.com/8k19gSa.jpeg",
  "https://i.imgur.com/QvhvEOJ.jpeg",
  "https://i.imgur.com/9eaIbuD.jpeg",
  "https://i.imgur.com/O7DZ9RP.jpeg",
  "https://i.imgur.com/fYgZbvH.jpeg",
  "https://i.imgur.com/rhtCoel.jpeg",
  "https://i.imgur.com/DZ9sKPQ.jpeg",
  "https://i.imgur.com/41O8KSx.jpeg",
  "https://i.imgur.com/yhFMoPp.jpeg",
  "https://i.imgur.com/uNJ9qlB.jpeg",
  "https://i.imgur.com/9MMGJDV.jpeg",
  "https://i.imgur.com/FPGbSqk.jpeg",
  "https://i.imgur.com/wDafiPz.jpeg",
  "https://i.imgur.com/4hNyaXs.jpeg",
  "https://i.imgur.com/OJtQQBT.jpeg",
  "https://i.imgur.com/SEIBK8B.jpeg",
  "https://i.imgur.com/nsLOCah.jpeg",
  "https://i.imgur.com/FH8z5ZP.jpeg",
  "https://i.imgur.com/ph0YDKs.jpeg",
  "https://i.imgur.com/BVA8NFw.jpeg",
  "https://i.imgur.com/m1DzFZU.jpeg",
  "https://i.imgur.com/VOplYfn.jpeg",
  "https://i.imgur.com/w3W5GCY.jpeg",
  "https://i.imgur.com/DFOkyJx.jpeg",
  "https://i.imgur.com/VhMeCov.jpeg",
  "https://i.imgur.com/kqkqzF9.jpeg",
  "https://i.imgur.com/Y61ozLh.jpeg",
  "https://i.imgur.com/Tf57pUs.jpeg",
   "https://i.imgur.com/LbQIT02.jpeg",
  "https://i.imgur.com/KlUscgf.jpeg",
  "https://i.imgur.com/3nxgfQO.jpeg",
  "https://i.imgur.com/pp0IFHB.jpeg",
  "https://i.imgur.com/1ZrZcs2.jpeg",
  "https://i.imgur.com/5l9Cx8F.jpeg",
  "https://i.imgur.com/qsRHAC7.jpeg",
  "https://i.imgur.com/6XpFH58.jpeg",
  "https://i.imgur.com/z1HsU4N.jpeg",
  "https://i.imgur.com/HJAc9SM.jpeg",
  "https://i.imgur.com/4GPVCQY.jpeg",
  "https://i.imgur.com/iiZQYej.jpeg",
  "https://i.imgur.com/v1SB9zY.jpeg",
  "https://i.imgur.com/7UbgAJa.jpeg",
  "https://i.imgur.com/gBF7iD4.jpeg",
  "https://i.imgur.com/0e7iYhS.jpeg",
  "https://i.imgur.com/vDf1qsW.jpeg",
  "https://i.imgur.com/Qp7jGs7.jpeg",
  "https://i.imgur.com/iHhKjRg.jpeg",
  "https://i.imgur.com/fEqQ53n.jpeg",
  "https://i.imgur.com/p9V8EES.jpeg",
  "https://i.imgur.com/G32lTV4.jpeg",
  "https://i.imgur.com/hK9CSWn.jpeg",
  "https://i.imgur.com/H44Kc2X.jpeg",
  "https://i.imgur.com/iDFXpdt.jpeg",
  "https://i.imgur.com/W1NUWIb.jpeg",
  "https://i.imgur.com/1sj0yoD.jpeg",
  "https://i.imgur.com/83Wt5yB.jpeg",
  "https://i.imgur.com/tHYsi9J.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`Ảnh Eula Lawrence \nSố Ảnh: ${link.length}\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };