var Webserver = require('./webserver.js');
var log = require('./log.js');
var version = require('../package.json').version;

var io = require('socket.io')(Webserver.getInstance({}).getWebserver());

io.on('connection', function(socket) {
    socket.on('req-file', function(data) {
        if(data.type === 'log') {
            socket.emit('log-req', log.getLog());
        }
    });

    socket.on('req-info', function(data) {
        if(data.type === 'version') {
            socket.emit('version-req', {version_val: 'v' + version});
        } else if(data.type === 'startDate') {
            socket.emit('startDate-req', {date_val: Webserver.getInstance({}).getStartDate()});
        }
    });
});