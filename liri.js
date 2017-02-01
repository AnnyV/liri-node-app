var keys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var omd = require('request');
var movieName ="";
var command = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t="+ movieName +"&y=&plot=short&r=json";
var nodeArgs = process.argv;

function getMovie(){
	for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});

}

function getSong(){

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 console.log(data);
    // Do something with 'data' 
});
}


function myTweets(){

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});
 
var params = {screen_name: 'annybella18',
				count: 20
	};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}

// ------------------------------Program stars here-------------------------------

if( command == "my-tweets") {
	 myTweets();
} 
	if(command == "spotify-this-song"){
		getSong();
	}

if ( command == "movie-this"){
	getMovie();
}