// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

var express = require("express")
var path = require("path")

var apiRoutes = require(path.join(__dirname, "/app/routing/apiRoutes.js"));
var htmlRoutes = require(path.join(__dirname, "/app/routing/htmlRoutes.js"));

console.log(apiRoutes, htmlRoutes)

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello world')
    var blank = new friendsGET;
    console.log(blank.hello)
    console.log(htmlRoutes.goHome.hello)
})
  
app.listen(PORT, function() {
    console.log("listening on port %s", PORT, "...")
    console.log(htmlRoutes.goHome, apiRoutes.friendsPOST);
});