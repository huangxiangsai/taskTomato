// mongoDB connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('open');
});


var userSchema = mongoose.Schema({
    id : Number,
    name: String,
    password : String,
    avatar : String,
    des : String,
    createTime : Date
})

var User = mongoose.model('User', userSchema)


User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users)
})

// var user = new User({ name: 'Silence' })

// console.log(user.name) // 'Silence'


// user.save(function (err, user) {
//   if (err) return console.error(err);
//   console.log(user.name);
// });