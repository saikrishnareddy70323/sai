

var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => res.send('hello!'));
 
var io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
       });
  });
  var port=process.env.PORT || 3000
  http.listen(port, () => {
    console.log('listening on *:3000');
  });