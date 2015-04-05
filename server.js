var app = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var express = require('express');
var webapp = express();

webapp.use(express.static(__dirname + '/public'));
webapp.listen(8080, function(){
	console.log("listening on *:8080");
});

var dash = io.of("/dash");
dash.on("connection", function(socket){
	console.log("Dashboard connected.");
	socket.emit("connected",true);
	socket.on("startSession",function(gamename){
		console.log("New session: "+gamename);
	});
	socket.on("reset", function(gamename){
		io.emit("reset", gamename);
		console.log(gamename+" reset!");
	});
});


io.on('connection', function(socket){
	console.log("Device connected");
	socket.on('join', function(game,usr){
		console.log(usr+' joined '+game);
		dash.emit("joined", usr, game);
	});

	socket.on("buzz", function(usr,game){
		console.log(usr+" Buzzed "+game);
		dash.emit("buzz", usr, game);
	});

	socket.on('leave', function(usr,game){
		console.log(usr+" left "+game);
		dash.emit('left', usr, game);
	});

	socket.on('disconnect', function(){
		console.log('Device left!');
	});

});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
