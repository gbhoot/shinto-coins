var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/routes.js')(app);

app.listen(8000);