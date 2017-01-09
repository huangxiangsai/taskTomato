 /**
  * UserManage
  */
import {User} from "../schemas/userSchema";
const util = require('util');
var CryptoJS = require("crypto-js");

 export class UserManage {
     userId : string;
     constructor() {
         
     }

     //创建用户
     createUser(userInfo){
         return new Promise(function(resolve, reject){

             if(/^\s*$/g.test(userInfo.mail) ){
                 return reject({code : -1 , msg : '请填写邮箱'});  
             }

             if(/^\s*$/g.test(userInfo.password) ){
                 return reject({code : -1 , msg : '请填写密码'});
             }

             let user = {
                 createTime : Date.now(),
                 name : userInfo.name,
                 mail : userInfo.mail,
                 password : userInfo.password
             }

             userInfo = user;
             userInfo.password = CryptoJS.AES.encrypt( userInfo.password, 'devsai.com 2017').toString();

             User.create( userInfo, function (err, user) {
                console.log('createUser',user);
                if (err) return reject(err);
                resolve({code : 200 , msg : 'register success'});
                // saved!
            })
         });
 
     }

     //用户登录
     login(mail :String,password : String){
         return new Promise(function(resolve, reject){
            User.findOne({ mail: mail }).exec(function(err, user){
                let pw = CryptoJS.AES.decrypt(user.password, 'devsai.com 2017').toString(CryptoJS.enc.Utf8);
                if(password === pw){
                    let id = user.id;
                    let token = this.generateToken(user.mail);
                    User.findByIdAndUpdate(user.id,user,function(err){
                        if(err){
                            reject({code : -1 , msg : '系统出错'});
                        }else{
                            resolve(id+"&"+token);
                        }
                    });   
                }else{
                    reject({code : -1 , msg : '用户名或密码不正确'});
                }
            });
         });
     }

     // 生成token
     generateToken(mail){        
        return CryptoJS.HmacMD5(mail,'devsai_'+Date.now).toString();
     }

     
     // 检测token
     valdataToken(userId,token){
         return new Promise(function(resolve, reject){
            User.findOne({ id: userId }).exec(function(err, user){
                if( !err && user.token === token){
                    resolve();
                }else{
                    reject();
                }
            });
         });
     }

     // =====S 后续开发功能 ======
     // 生成激活码
     generateCodeById(id){

     }

     // 发送用户激活邮件
     sendMail(id,code){

     }

     // 激活用户
     actiUser(id,code){

     }

     //第三方登录
     thridLogin(){

     }


     // =====E 后续开发功能 ======

     

     


 }