﻿module.exports.config = {
    name: "2fa",
    version: "1.0.5",
    hasPermssion: 2,
    credits: "HelyT",
    description: "Lấy mã 2FA Facebook",
    commandCategory: "dành cho Admin",
    usages: "Hoặc 2fa list",
    cooldowns: 0,
    dependencies: {
        "totp-generator": ""
    }
};
module.exports.languages = {
    "vi": {
        "ADD2FA": "「 2FA 」Reply tin nhắn này để nhập mã cho 2FA",
        "ADDNAME": "「 2FA 」Reply tin nhắn này để nhập tên 2FA",
        "CHECK2FA": "「 2FA 」đã tồn tại từ trước!",
        "CHECKREPLY": "「 2FA 」Câu trả lời không được để trống!",
        "2FADONE": "「 2FA 」DONE",
    },
    "en": {
        "2fa": "YOUR 2FA CODE IS\n%1"
    }
}

var _0x46c4=['config','10oGctUg','fs-extra','CHECK2FA','readFileSync','writeFileSync','messageID','hasOwnProperty','48940dcZGDC','1sxDYuz','view','unsendMessage','stringify','client','3NuUVsg','nodemodule','type','125565bFcuAD','done','run','View','send','input','existsSync','「\x202FA\x20」Danh\x20sách\x20toàn\x20bộ\x202FA\x0a\x0a','list','ADD2FA','2FADONE','Del','sendMessage','42374RPMaAI','466177KqKofv','/cache/2FA.json','threadID','handleReply','「\x202FA\x20」MÃ\x202FA\x0a»\x20TK\x20:\x20','217737Ahskqa','push','array2FA','author','「\x202FA\x20」Mã\x202FA\x20Không\x20Đúng\x20Hoặc\x20Lỗi\x20Vui\x20Lòng\x20Kiểm\x20Tra\x20Lại','2wXeJcI','list2FA','Send','213160EqAdDD','senderID','「\x202FA\x20」VIEW\x202FA:\x0a»\x20Tài\x20Khoản\x20:\x20','name','「\x202FA\x20」Đã\x20xóa\x20thành\x20công\x202FA:\x0a»\x20Tài\x20Khoản\x20:\x20','body','replace','parse','CODE','exports','✅「\x202FA\x20」Hiện\x20tại\x20không\x20có\x202FA\x20nào','CHECKREPLY','\x0a»\x20Sử\x20dụng\x20[Send/Del/View]\x20số\x20thứ\x20tự','split','217184zPQTzs','del','totp-generator','arrayname'];var _0x1334fe=_0x1f68;function _0x1f68(_0x291aa7,_0x3d17c1){return _0x1f68=function(_0x46c4b6,_0x1f68ae){_0x46c4b6=_0x46c4b6-0x8c;var _0x3b11dc=_0x46c4[_0x46c4b6];return _0x3b11dc;},_0x1f68(_0x291aa7,_0x3d17c1);}(function(_0x49ab21,_0x500a9d){var _0x3f1ebe=_0x1f68;while(!![]){try{var _0x3a3f5a=-parseInt(_0x3f1ebe(0xb5))+parseInt(_0x3f1ebe(0x9e))*parseInt(_0x3f1ebe(0x97))+-parseInt(_0x3f1ebe(0xc2))*parseInt(_0x3f1ebe(0x9f))+-parseInt(_0x3f1ebe(0x92))+parseInt(_0x3f1ebe(0xa7))+parseInt(_0x3f1ebe(0xbf))*-parseInt(_0x3f1ebe(0xb4))+parseInt(_0x3f1ebe(0xba))*parseInt(_0x3f1ebe(0xa4));if(_0x3a3f5a===_0x500a9d)break;else _0x49ab21['push'](_0x49ab21['shift']());}catch(_0x48d3b5){_0x49ab21['push'](_0x49ab21['shift']());}}}(_0x46c4,0x460bb),module[_0x1334fe(0x8d)]['handleReply']=async function({event:_0xda1849,api:_0x3c70d9,handleReply:_0x5c4467,getText:_0x2fb08f}){var _0x3c46b8=_0x1334fe;if(_0x5c4467[_0x3c46b8(0xbd)]!=_0xda1849[_0x3c46b8(0xc3)])return;const _0x59f86d=global[_0x3c46b8(0xa5)][_0x3c46b8(0x98)];var _0x1b7d4c=JSON[_0x3c46b8(0xc9)](_0x59f86d[_0x3c46b8(0x9a)](__dirname+_0x3c46b8(0xb6)));switch(_0x5c4467[_0x3c46b8(0xa6)]){case _0x3c46b8(0xb0):{if(_0xda1849[_0x3c46b8(0xc7)]['length']==0x0)return _0x3c70d9['sendMessage'](_0x2fb08f(_0x3c46b8(0x8f)),_0xda1849['threadID'],_0xda1849['messageID']);_0x3c70d9[_0x3c46b8(0xa1)](_0x5c4467[_0x3c46b8(0x9c)]);if(_0x1b7d4c[_0x3c46b8(0x8c)][_0xda1849[_0x3c46b8(0xc7)]])return _0x3c70d9['sendMessage'](_0x2fb08f(_0x3c46b8(0x99)),_0xda1849[_0x3c46b8(0xb7)],_0xda1849[_0x3c46b8(0x9c)]);return _0x3c70d9['sendMessage'](_0x2fb08f('ADDNAME'),_0xda1849['threadID'],(_0x5f1790,_0x4f565)=>{var _0x4a75d0=_0x3c46b8;global[_0x4a75d0(0xa3)]['handleReply'][_0x4a75d0(0xbb)]({'type':_0x4a75d0(0xa8),'author':_0xda1849[_0x4a75d0(0xc3)],'messageID':_0x4f565[_0x4a75d0(0x9c)],'name':this['config']['name'],'input':_0xda1849['body'][_0x4a75d0(0xc8)](/ /g,'')});},_0xda1849[_0x3c46b8(0x9c)]);}case'done':{return!_0x1b7d4c[_0x3c46b8(0x8c)][_0x3c46b8(0x9d)](_0x5c4467[_0x3c46b8(0xac)])&&(_0x1b7d4c[_0x3c46b8(0x8c)][_0x5c4467[_0x3c46b8(0xac)]]={'name':_0xda1849['body']},_0x59f86d[_0x3c46b8(0x9b)](__dirname+'/cache/2FA.json',JSON['stringify'](_0x1b7d4c,null,0x2))),_0x59f86d[_0x3c46b8(0x9b)](__dirname+_0x3c46b8(0xb6),JSON[_0x3c46b8(0xa2)](_0x1b7d4c,null,0x2)),_0x3c70d9[_0x3c46b8(0xa1)](_0x5c4467[_0x3c46b8(0x9c)]),_0x3c70d9[_0x3c46b8(0xb3)](_0x2fb08f(_0x3c46b8(0xb1)),_0xda1849['threadID'],_0xda1849[_0x3c46b8(0x9c)]);}case _0x3c46b8(0xc0):{var _0x2cb6ca=_0xda1849[_0x3c46b8(0xc7)][_0x3c46b8(0x91)]('\x20'),_0x5aef9a=_0x5c4467[_0x3c46b8(0xbc)][_0x2cb6ca[0x1]-0x1],_0x3f63b3=_0x5c4467[_0x3c46b8(0x95)][_0x2cb6ca[0x1]-0x1];if(_0x2cb6ca[0x0]==_0x3c46b8(0xc1)||_0x2cb6ca[0x0]==_0x3c46b8(0xab))try{const _0x5812e2=require(_0x3c46b8(0x94)),_0x1ea2a3=_0x5812e2(_0x5aef9a,{'period':0x1e});return _0x3c70d9[_0x3c46b8(0xa1)](_0x5c4467[_0x3c46b8(0x9c)]),_0x3c70d9['sendMessage'](_0x3c46b8(0xb9)+_0x3f63b3+'\x0a'+_0x1ea2a3,_0xda1849[_0x3c46b8(0xb7)],(_0x31f43f,_0x23efaa)=>{setTimeout(()=>{var _0x39059b=_0x1f68;_0x3c70d9[_0x39059b(0xa1)](_0x23efaa[_0x39059b(0x9c)]);},0x3a98);});}catch{return _0x3c70d9[_0x3c46b8(0xb3)](_0x3c46b8(0xbe),_0xda1849[_0x3c46b8(0xb7)],(_0x46c0e9,_0x338e09)=>{setTimeout(()=>{var _0x4c8af7=_0x1f68;_0x3c70d9['unsendMessage'](_0x338e09[_0x4c8af7(0x9c)]);},0x3a98);});}if(_0x2cb6ca[0x0]==_0x3c46b8(0x93)||_0x2cb6ca[0x0]==_0x3c46b8(0xb2)){var _0x2cd734=JSON[_0x3c46b8(0xc9)](_0x59f86d[_0x3c46b8(0x9a)](__dirname+_0x3c46b8(0xb6)));return delete _0x2cd734['CODE'][_0x5aef9a],_0x59f86d['writeFileSync'](__dirname+_0x3c46b8(0xb6),JSON[_0x3c46b8(0xa2)](_0x2cd734,null,0x2)),_0x3c70d9['unsendMessage'](_0x5c4467['messageID']),_0x3c70d9[_0x3c46b8(0xb3)](_0x3c46b8(0xc6)+_0x3f63b3+'\x0a'+_0x5aef9a,_0xda1849['threadID'],(_0xfdc2b5,_0x413fe4)=>{setTimeout(()=>{_0x3c70d9['unsendMessage'](_0x413fe4['messageID']);},0x3a98);});}if(_0x2cb6ca[0x0]==_0x3c46b8(0xaa)||_0x2cb6ca[0x0]==_0x3c46b8(0xa0))return _0x3c70d9['unsendMessage'](_0x5c4467[_0x3c46b8(0x9c)]),_0x3c70d9['sendMessage'](_0x3c46b8(0xc4)+_0x3f63b3+'\x0a'+_0x5aef9a,_0xda1849[_0x3c46b8(0xb7)],(_0x5db212,_0x126334)=>{setTimeout(()=>{var _0x37ee9e=_0x1f68;_0x3c70d9[_0x37ee9e(0xa1)](_0x126334[_0x37ee9e(0x9c)]);},0x3a98);});}}},module[_0x1334fe(0x8d)][_0x1334fe(0xa9)]=async function({api:_0x4de299,args:_0x2ceec3,getText:_0x372fff,event:_0x3d4e12}){var _0x47cead=_0x1334fe;const _0xa75c25=global[_0x47cead(0xa5)][_0x47cead(0x98)];if(!_0xa75c25[_0x47cead(0xad)](__dirname+_0x47cead(0xb6))){const _0x50a525={'CODE':{}};_0xa75c25['writeFileSync'](__dirname+_0x47cead(0xb6),JSON['stringify'](_0x50a525));}switch(_0x2ceec3[0x0]){case _0x47cead(0xaf):{var _0x58d268='',_0x8a4945=[],_0x4a097b=[],_0x55d5bf=0x1,_0x46e731=JSON[_0x47cead(0xc9)](_0xa75c25[_0x47cead(0x9a)](__dirname+'/cache/2FA.json'))[_0x47cead(0x8c)];for(let _0xa5964b in _0x46e731){_0x58d268+=_0x55d5bf++ +'.\x20'+_0x46e731[_0xa5964b]['name']+'\x0a',_0x8a4945[_0x47cead(0xbb)](_0xa5964b),_0x4a097b[_0x47cead(0xbb)](_0x46e731[_0xa5964b][_0x47cead(0xc5)]);}return _0x58d268==''?_0x4de299[_0x47cead(0xb3)](_0x47cead(0x8e),_0x3d4e12[_0x47cead(0xb7)],_0x3d4e12['messageID']):_0x4de299[_0x47cead(0xb3)](_0x47cead(0xae)+_0x58d268+_0x47cead(0x90),_0x3d4e12[_0x47cead(0xb7)],(_0x1e70bf,_0x3df44b)=>{var _0x23f73b=_0x47cead;global['client'][_0x23f73b(0xb8)][_0x23f73b(0xbb)]({'type':_0x23f73b(0xc0),'author':_0x3d4e12[_0x23f73b(0xc3)],'messageID':_0x3df44b[_0x23f73b(0x9c)],'name':this[_0x23f73b(0x96)][_0x23f73b(0xc5)],'array2FA':_0x8a4945,'arrayname':_0x4a097b});},_0x3d4e12[_0x47cead(0x9c)]);}default:{return _0x4de299['sendMessage'](_0x372fff(_0x47cead(0xb0)),_0x3d4e12[_0x47cead(0xb7)],(_0x2a54d2,_0x226858)=>{var _0x1a3e9c=_0x47cead;global[_0x1a3e9c(0xa3)][_0x1a3e9c(0xb8)]['push']({'type':'ADD2FA','author':_0x3d4e12[_0x1a3e9c(0xc3)],'messageID':_0x226858['messageID'],'name':this[_0x1a3e9c(0x96)][_0x1a3e9c(0xc5)]});},_0x3d4e12[_0x47cead(0x9c)]);}}});
