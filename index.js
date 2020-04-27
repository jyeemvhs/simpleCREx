

let express = require('express');
var bodyParser = require('body-parser');

var mongoose = require("mongoose"); //new
var Info = require("./models/Info"); //new
mongoose.connect("mongodb://localhost/infodb"); //new

var routes = require("./routes");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));
app.use(routes);  //new

let port = process.env.PORT || 3000;
app.listen(port);
