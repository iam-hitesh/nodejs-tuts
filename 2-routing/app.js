var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.listen(3000)

// Other option also for routing
// const router = express.Router() // 1

// Routing for Homepage, create a view at views/home.ejs using HTML
app.get('/', function(req, res) {
  res.render('home');
});

// Routing for about, create a view at views/about.ejs using HTML
app.get('/about', function(req, res) {
  res.render('about');
});

// Routing for sending query through URL
app.get('/users/:name', function (req, res) {
  res.send(`Welcome, ${req.params.name}!`)
})

// Routing for POST Requests, try this in POSTMAN
app.post('/contact', function (req, res) {
  res.send('Page with POST request method')
})

// Routing for handling all kind of requests
app.all('/services', function (req, res) {
  res.send('Page with All kind of request method')
})

// Login Page
app.route('/login')
 .get((req, res) => {
   res.render('login')
 })
 .post((req, res) => {
   const postBody = req.body;
   res.send(postBody.username);
 })

// Routing for Error Page, create a view at views/error/404.ejs using HTML
app.get('*', function(req, res) {
  res.render('error/404');
});


// You Can see a full application in Node.js at https://github.com/iam-hitesh/nodejs-tuts/project
