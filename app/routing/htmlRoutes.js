// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.


const goHome = function () {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
        this.hello = "HELLO"
    });
}

const doSurvey = function () {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });
}

module.exports = goHome, doSurvey;