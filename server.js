var express = require('express')
  , cors = require('cors')
  , app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//app.set('view engine', 'jade');

//custom modules

var PORT = process.env.PORT || 5111;

app.use(cors());

var whitelist = ['http://localhost:' + PORT + '/'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};


app.use(express.static(__dirname));



app.get('/', function(req, res){
  res.send('index.html');
});

app.listen(PORT, function(){
  console.log('CORS-enabled web server listening on port, %d', PORT);
});
