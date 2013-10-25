var connect = require('connect');
var port = process.env.PORT || 3000;
var app = connect.createServer(
  connect.static('./static/')
).listen(port);