var http = require('http')

var express = require('express')
var compression = require('compression')

var app = express()

app.set('port', process.env.PORT || 3333)
app.use(compression())
app.use(express.static(__dirname + '/dist'))
app.use(function(req, res) {
  res.sendfile('dist/index.html')
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'))
})
