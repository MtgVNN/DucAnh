var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mongoDB = 'mongodb+srv://nguyenducanh:Epicdemicsound98@cluster0.4lo2uru.mongodb.net/test';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

const planeSchema = new Schema({
    name: {type:String, required:true},
    description: {type:String},
    price: {type:Number},
    picURL: {type:String}
})

module.exports = mongoose.model('plane', planeSchema);