// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.


var friends = require("../data/friends.js");

module.exports = function(app) {
    console.log ("api Routes GO!")
    
    // Display possible friends:
    app.get("/api/friends", function(req, res) {
        console.log("GET SUCCESSFUL!")
        res.json(friends);
    });

    // Incoming survey results:
    app.post("/api/friends", function(req, res) {
        console.log("POSTING!")

        // console.log(req);

		var surveySays = req.body;
		console.log("surveySays: " + JSON.stringify(surveySays));

		// var justScores = surveySays.scores;
		// console.log("scores: " + justScores);

		// Add new user
		friends.push(surveySays);

	});
}