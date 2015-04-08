# zBuzzer Server

A multiuser buzzer system for smartphones using websockets.

## Tech
zBuzzer uses a number of open source projects to work properly:
* [NODE.js] - evented I/O for the backend
* [Socket.IO] - Websockets client for server and android client
* [Express] - The node.js webserver
* [Twitter Bootstrap] - great UI boilerplate for dashboard
* [jQuery] - for frontend DOM manipulation

## Installation
####Setup Server
You need node.js
```sh
$ sudo apt-get install nodejs
```
Clone and install npm dependancies
```sh
$ git clone https://github.com/prayashm/zbuzzer-server.git
$ cd zbuzzer-server
$ npm install
```
Start the server
```sh
$ npm start
```

####Client
Android Client is at [zbuzzer-android-client](https://github.com/prayashm/zbuzzer-android-client)
Install the apk from [app/app-release.apk] on your phone


### Todo's

 - Setup the server and run an instance
 - Add multi sessions feature
 - Vibrate phone on buzz
 - Buzz on hardware button press
 - Show Quiz Master notes on phones

License
----

MIT

[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[express]:http://expressjs.com
[Socket.io]:http://socket.io
