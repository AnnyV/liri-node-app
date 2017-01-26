// Grabs the bands variables
var keys = require("./keys.js");

// Gets all of myBands bands from the bands file.
var keysList = keys.twitterKeys;
var latersTweets = "";

var myTweets = process.argv[2];
console.log(myTweets);
var twitterUrl = "https://api.twitter.com/1.1/search/tweets.json?q=" + laters tweets + "&y=&result_type=mixed&count=40&r=json";

console.log(twitterUrl, function(error, response, body){
	if (!error  && response.statuscode === 200) {

	}
});