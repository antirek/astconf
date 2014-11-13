var fs = require('fs'),
    ini = require('ini');

var path = '/etc/asterisk/',
    files = ['sip.conf'];

var sipconfig = ini.parse(fs.readFileSync(path + files[0], 'utf-8'))

console.log(sipconfig);
