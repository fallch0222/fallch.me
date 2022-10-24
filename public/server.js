
function server() {
  var app = express();
  app.use(express.static(__dirname + '/public'));
  app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
  });
  return app;
}