var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.listen(3000)

// Routing for about, create a view at views/about.ejs in HTML
app.get('/about', function(req, res) {
  res.render('about');
});


// You Can see a full application in Node.js at https://github.com/iam-hitesh/nodejs-tuts/project
