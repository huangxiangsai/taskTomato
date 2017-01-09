// mongoDB connect
const mongoose = require('mongoose');

export default function mongoConnect(){
    mongoose.connect('mongodb://localhost:27017/taskTomato');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log('mongoDB open');
    });
}