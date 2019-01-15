The goal of this story is to briefly explain how routing works in Express while building a simple — very simple — Node app.

This chapter is for routing in any application, routing is very necessary for any application so that we can route our application to different pages or requests.

## What is Routing

First of all, let’s take a quick (really quick) glance at what routing is:

> somewebsite.com/someroute

It’s basically taking the user (or some data) from one place to another. That place is the route. I told you I was going to make it quick.

### Follow these steps

1. First, let’s create the project and install the packages. Just run the following in the command line:
2. npm install express
3. npm install ejs
4. npm install body-parser
> You can additionally add the dash dash save (I write — as “dash” because Medium automatically formats it, and it doesn’t look well for this purpose) to save it in your package.json file. But how this works is a story for another day.


### Handling GET requests

Congratulations, everything is ready to handle requests! There are several types of requests in HTTP, but we’ll only be handling GET requests, which are used to retrieve data from the server. To handle this kind of request in Express, we use the following method:

### Handling POST and Other requests

Check login routing in app.js

Follow File app.js()(https://github.com/iam-hitesh/nodejs-tuts/blob/master/2-routing/app.js)


### You Can see a full application in Node.js at https://github.com/iam-hitesh/nodejs-tuts/project

#### Note (why body-parser is being used):
While we are at it we may as well include the body parser so that our application can parse the post data body. We will be using the parsed data to store in our schema.

```
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
```



