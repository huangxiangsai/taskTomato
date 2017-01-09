var CryptoJS = require("crypto-js");


console.log(CryptoJS.HmacMD5('469181336@qq.com','devsai'+Date.now).toString());

console.log(CryptoJS.AES.encrypt( '123456', 'devsai.com 2017').toString());