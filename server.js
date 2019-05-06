// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

var express = require("express")
var path = require("path")
var app = express();

var PORT = process.env.PORT || 3000;

var apiRoutes = require(path.join(__dirname, './app/routing/apiRoutes'))(app);
var htmlRoutes = require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reveal public dir
app.use(express.static(path.join(__dirname, './app/public')));
console.log((path.join(__dirname, 'app/public')));

app.listen(PORT, function() {
    console.log("listening on port %s", PORT, "...")
});