/**
 * Dependencies
 */
const express = require('express');
var http = require('http')
var reload = require('reload');

/**
* Create our express app
*/

var app = express();

/**
 * Environment / configuration
 */

var port = process.env.PORT || 3000;
app.set('port', port);
app.use(logger('dev'));
app.use(bodyParser.json());



/**
 * Serve static files from the appropriate folder
 */
app.use(express.static(`${__dirname}`));

/**
 * Attach server to port
 */

var server = http.createServer(app)

server.listen(app.get('port'), () => {
  console.log(`Hedwig is running on port ${app.get('port')} 🎉`);
  console.log(`Open docs at http://localhost/${app.get('port')}/docs`);
});

function reloadBrowser() {
    reload(app);
}

module.exports = reloadBrowser;
