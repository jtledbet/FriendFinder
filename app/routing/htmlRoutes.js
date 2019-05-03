// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
   
app.get('/survey', function (req, res) {
    res.send('survey')
    // A GET Route to `/survey` which should display the survey page.
})

app.all('/home.html', function (req, res, next) {
    res.send('home')
  })