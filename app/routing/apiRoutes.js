// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.


var friends = require("../data/friends.js");

module.exports = function (app) {
    console.log("api Routes GO!")

    // Display possible friends:
    app.get("/api/friends", function (req, res) {
        console.log("GET SUCCESSFUL!")
        res.json(friends);
    });

    // Incoming survey results:
    app.post("/api/friends", function (req, res) {
        console.log("POSTING!")

        console.log(req.body);

        var surveySays = req.body;
        console.log("surveySays: " + JSON.stringify(surveySays, 2));

        var surveyName = req.body.name;
        console.log("surveyName: " + JSON.stringify(surveyName, 2));

        var justScores = surveySays.scores;
        console.log("scores: " + justScores);


        var differenceArray = [];
        var differenceMin = 40;
        var bestFriend;

        for (friend in friends) {
            var thisFriend = friends[friend];
            console.log(thisFriend)

            var thisDifference;
            var totalDifference = 0;

            for (score in thisFriend.scores) {
                thisDifference = Math.abs(thisFriend.scores[score] - justScores[score])
                totalDifference += thisDifference;
                totalDifferene = totalDifference + thisDifference;
            }

            differenceArray.push(totalDifference);

            for (index in differenceArray) {
                console.log("index:", index, "difArIn: ", differenceArray[index]) 

                if (differenceArray[index] < differenceMin) {
                    differenceMin = differenceArray[index];
                    bestFriend = {
                        "name": thisFriend.name,
                        "photo": thisFriend.photo
                    };
                }
            }
    
            console.log("bestFriend: " + bestFriend.name)
        }

        // Add new user
        friends.push(surveySays);

        // Respond to query
        var response = (bestFriend);
        res.json(response);

    });
}