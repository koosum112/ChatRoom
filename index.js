var express = require('express'), 
app = express(), 
http = require('http'),
server = http.createServer(app),
io = require('socket.io').listen(server);

// 監聽port: 3000
server.listen(3000, function(){
    console.log("Server Started. http://localhost:3000");
});

// 進入首頁
app.get('/', function (req, res) {
    // 回傳Hello World!
    // res.send('Hello, World!');

    // 回傳index.htmtl
    res.sendFile( __dirname + '/views/index.html');
});

// 當發生連線事件
io.on('connect', function(socket){
    console.log('開始連線');  // 顯示 Hello!
});

// 當發生連線事件
io.on('reconnect', function(socket){
    console.log('重新連線!');
});

// 當發生連線事件
io.on('connection', function(socket){
    console.log('連線成功!');
    
    // 當發生離線事件
    socket.on('disconnect', function(){
        console.log('斷線');
    });
});
