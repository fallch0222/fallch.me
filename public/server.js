
function server() {
  var app = express();
  app.use(express.static(__dirname + '/public'));
  var port = normalizePort('80');
  app.set('port', port);
  app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
  });
  return app;
}

