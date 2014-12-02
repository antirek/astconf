var fs = require('fs'),
    ini = require('./ini'),
    i, j;

var path = '/etc/asterisk/',
    files = ['sip.conf'];

var Conf = {};
    Conf[files[0]],
    q = ini.parse(fs.readFileSync('./extensions.conf', 'utf-8'));

    

//console.log('qw', q);
    

//fs.writeFileSync('./' + files[0], ini.stringify(Conf[files[0]]));
