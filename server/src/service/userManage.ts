 /**
  * UserManage
  */
import { User } from '../schemas/userSchema';
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

             // 判断邮箱是否被占用
            let promise =  User.findOne({ mail: userInfo.mail }).exec();
             promise.then(function(user){
                 if(user && user._id){
                     reject({code : -1 , msg : '邮箱已存在'});
                 }else{
                    user = {
                        createTime : Date.now(),
                        name : userInfo.name,
                        mail : userInfo.mail,
                        password : userInfo.password
                    } 
                    userInfo = user;
                    userInfo.password = CryptoJS.AES.encrypt( userInfo.password, 'devsai.com 2017').toString();
                    return User.create( userInfo);
                 }
             }).then(function(user){
                resolve({code : 200 ,data : user, msg : 'register success'});
                // saved!
             },function(err){
                 if (err) return reject({code : -1 , msg : '系统故障，注册失败'});
             });
         });
 
     }

     //用户登录
     login(mail :String,password : String){
         let that = this;
         return new Promise(function(resolve, reject){
            let promise = User.findOne({ mail: mail }).exec();
            promise.then(function(user){
                
                let pw = CryptoJS.AES.decrypt(user.password, 'devsai.com 2017').toString(CryptoJS.enc.Utf8);
                if(password === pw){
                    let id = user._id;
                    let token = that.generateToken(user.mail);
                    user.token = token;                    
                    return User.findByIdAndUpdate(user._id,{token : token,loginDate : Date.now()});   
                }else{
                    reject({code : -1 , msg : '用户名或密码不正确'});
                }
            }).then(function(user){
                let query = User.findById(user._id).exec();
                query.then(function(user){
                    resolve({code : 200, data : user._id +'&'+user.token});
                })   
            },function(){
                reject({code : -1 , msg : '系统出错'});
            });
         });
     }

     // 生成token
     generateToken(mail:String){  
         try {
            return CryptoJS.HmacMD5(mail,'devsai_'+Date.now() ).toString();     
         } catch (error) {
             console.log('生成token出错: ',error);
         }      
        
     }

     // 获得用户列表
     getUserlist(){
         return User.find().exec();
     }

     // 清空用户
     clearUser(){
         return User.find().remove();
     }

     
     // 检测token
     valdataToken(userId:String,token:String){
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