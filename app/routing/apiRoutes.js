var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log("got to post route");
    var array = friends.scores;
    var friendsCount = 0;
    var bestMatch =0; 
    var scoresArray =[];
    var userInput = req.body;

    console.log("this is the req.body: " + req.body);
    var userresponse = userInput.scores;
    // var me = JSON.stringify(userInput);
    console.log(userInput.scores);
    console.log(userresponse);
    // console.log(typeof(req.body.score[0]));

    console.log("this is the userresponse: " + userresponse);

    var matchName="";
    var matchImage="";
    for (var i =0 ; i <friends.length; i++){
        var diff = 0;

        for (var j=0; j<userresponse.length; j++){
            diff += Math.abs(parseInt(friends[i].scores[j]- userresponse[j]))
        }
       scoresArray.push(diff);
    }

    for(var i =0 ; i<scoresArray.length; i++){
        if(scoresArray[i]< scoresArray[bestMatch]){
        bestMatch = i
        }
    }
    
    var bestfriend = friends[bestMatch];
    console.log("b",bestfriend);
    console.log("c",bestMatch);

    res.json(bestfriend);
    console.log(bestfriend);

    console.log(typeof(friends));
    // friends.push(req.body);
  });
};

