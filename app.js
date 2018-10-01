var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render("pages/index.ejs");
});

app.get('/about', function(request, response) {
  response.render("pages/about.ejs");
});

app.get('/administration', function(request, response) {
  response.render("pages/administration.ejs");
});

app.get('/faculty', function(request, response) {
  response.render("pages/faculty.ejs");
});

app.get('*',function(request,response){
  response.render("pages/404.ejs");
});


app.listen(app.get('port'),process.env.IP,function() {
  console.log("Node server is running at localhost:" + app.get('port')+" "+process.env.IP);
});
