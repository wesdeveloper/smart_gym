const mongoose = require('mongoose');

const DBProd = 'mongodb://smartGym:smartGym@ds129024.mlab.com:29024/smart_gym';
const DBTest = 'mongodb://smartGymTester:smartGymTester@ds129434.mlab.com:29434/smart_gym_test';

const DBCon = process.env.NODE_ENV === 'test' ? DBTest : DBProd;

mongoose.Promise = global.Promise;
mongoose.connect(DBCon, { useMongoClient: true });

module.exports = mongoose;
