var fs = require('fs'),
    ini = require('ini'),
    i, j;

var path = '/etc/asterisk/',
    files = ['sip.conf'];

var Conf = {};
    Conf[files[0]] = ini.parse(fs.readFileSync(path + files[0], 'utf-8'));

    for (i in Conf[files[0]]){
        var section = Conf[files[0]][i];
        for (j in section){
            section[j] = section[j].trim();
        }
    }

console.log(Conf);
    

fs.writeFileSync('./' + files[0], ini.stringify(Conf[files[0]]));
