We are going to use mongo for the database. First we are going to install mongo, then we are going to add the data folder where the dbs are stored, then we are going to give that folder the correct permissions. It’s not as hard as it sounds. In your terminal run the following:

```
brew install mongo
mkdir -p /data/db
sudo chown -R `id -un` /data/db
```

That’s it. Now when we run mongod in the terminal, mongo will be running and ready to use. So actually, go do that now. Open up a separate window and run mongod

We will be using mongoose to handle our connection to mongo. So in your terminal:

```
npm install mongoose --save
```

And in our app.js:

```
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/node-blog")
```

#### Note: mongo by default connects on 27017. The last part of the connection url is the name of our database, here I have decided to use “node-blog”
