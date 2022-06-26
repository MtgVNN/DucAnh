var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mongoDB = 'mongodb://localhost:27017/plane';
//var mongoDB = 'mongodb://phamkhacthanhphong:phongthanh123@cluster0-shard-00-00.ntq61.mongodb.net:27017,cluster0-shard-00-01.ntq61.mongodb.net:27017,cluster0-shard-00-02.ntq61.mongodb.net:27017/test?replicaSet=atlas-11l1y5-shard-0&ssl=true&authSource=admin'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

const planeSchema = new Schema({
    name: {type:String, required:true},
    description: {type:String},
    price: {type:Number},
    picURL: {type:String}
})

module.exports = mongoose.model('plane', planeSchema);