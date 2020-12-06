// load up the express framework and body-parser helper
const express = require('./server/node_modules/express');
const bodyParser = require('./server/node_modules/body-parser');

// create an instance of express to serve our end points - JSON
const appJson = express();

appJson.use(express.static(__dirname + '/public'))

appJson.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
appJson.use(bodyParser.json());
appJson.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./server/routes/routesJson.js')(appJson, fs);

// finally, launch our server on port 3001.
const server = appJson.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});
