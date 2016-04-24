var fs = require('fs'),
    ini = require('./ini'),
    i, j;


var data = {
  'number':  {count: 10},
  'string':  {drink: 'white russian'},
  'boolean': {isTrue: true},
  'nested boolean': {theDude: {abides: true, rugCount: 1}}
}

console.log(ini.encode(data));