var express = require("express");
var app = express();
var request = require("request");
const { response } = require("express");
app.set("view engine", "ejs");
app.get("/", function(request, response) {
    response.render("search");
});
app.get("/results", function(req, res) {
    // res.send("Works");
    var value = req.query.searchvalue;
    var url = "http://www.omdbapi.com/?s=" + value + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", { data: data });
        }
    });
});
app.listen(3000, function() {
    console.log("**Server triggered**");
});