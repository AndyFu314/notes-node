console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Andy', 1, 'Andy', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andy'));

// console.log('Result: ', notes.add(10, -8));

// var user = os.userInfo();

// fs.appendFile('UserInfo.txt', `User name: ${user.username}, you are: ${notes.age} \n`);