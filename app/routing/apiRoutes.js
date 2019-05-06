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

        console.log(req.body);

		var surveySays = req.body;
		console.log("surveySays: " + JSON.stringify(surveySays));

		var justScores = surveySays.scores;
        console.log("scores: " + justScores);
        

        var differenceArray = [];
        var differenceMin = 50;
        var bestFriend = '';

        for(friend in friends) {
            var thisFriend = friends[friend];
            var thisDifference;
            var totalDifference = 0;
            for (i in thisFriend.scores) {
                thisDifference = Math.abs(friends[friend].scores[i] - justScores[i])
                console.log(friends[friend].scores[i] + "minus" + justScores[i] + " = " + thisDifference)
                console.log(thisDifference, totalDifference)
                totalDifference += thisDifference;
            }

            differenceArray.push(totalDifference);

            for (index in differenceArray) {
                if (differenceArray[index] < differenceMin) {
                    console.log(differenceMin, differenceArray[index])
                    differenceMin = differenceArray[index];
                    bestFriend = friends[friend].name;
                }
            }
        }

        console.log ("min difference!", differenceMin);
        console.log ("best friend!", bestFriend);

		// Add new user
        friends.push(surveySays);
        
        res.json(surveySays)

	});
}