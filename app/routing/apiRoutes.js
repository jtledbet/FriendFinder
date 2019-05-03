// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.

var friendsGET = function () {
    app.get('/api/friends', function (req, res) {
        res.send('/api/friends')
        this.hello = "friendly get!"
        // This will be used to display a JSON of all possible friends.
    });
}

var friendsPOST = function () {
    app.post('/api/friends', function (req, res) {
        res.send('api/friends')
        this.hello = "friendly post!"
        // This will be used to handle incoming survey results. 
        // This route will also be used to handle the compatibility logic.
    });
}

module.exports = friendsGET, friendsPOST;