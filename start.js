var connect = require('connect');
var port = process.env.PORT || 3000;
var sass = require('node-sass');
var app = connect.createServer(
  sass.middleware({
    src: './static',
    dest: './static',
    debug: true
  }),
  connect.static('./static/')
).listen(port);
