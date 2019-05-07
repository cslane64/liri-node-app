require("dotenv").config();
var axios = require("axios");
var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new Spotify({id: process.env.SPOTIFY_ID, secret: process.env.SPOTIFY_SECRET});

//console.log(spotify);

var select = function(switchData, functionData) {
    switch(switchData) {
        case 'spotify-this-song' :
            getSpotify(functionData);
                
            break;
        case 'concert-this' :
            getConcert(functionData);
            
            break;
        case 'movie-this' :
            getMovie(functionData);
            break;
        case 'do-what-it-says' :
            getDoIt(functionData);
            break;
        default:
        console.log("Liri does not understand that request!")
    }
}
var getArtistNames = function(artist){
    return artist.name
}

var getSpotify = function(songName){
    if(songName == undefined) {
        songName = "The Sign";
    }
    spotify
    .search({ type: 'track', query: songName })
    .then(function(response) {
        var songs = response.tracks.items;
       
        for (i = 0; i < songs.length; i++) {
            console.log(i+1);
            console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
            console.log("Song Name: " + songs[i].name);
            console.log("Preview link: " + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name);
            console.log("---------------------------------------------");
        }
    })
    .catch(function(err) {
      console.log(err);
    })
}
var getConcert = function(artistName) {
    
    axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp")
    .then(
    function(response) {
        if (response.data.length == 0) {
            console.log("This artist has no concerts scheduled!")
        }
    var res = response.data;
    var venue;
    var location;
    var date;
    for ( i = 0; i < res.length; i++) {
            venue = res[i].venue.name;
            location = res[i].venue.city + ", " + res[i].venue.region;
            date = res[i].datetime
            console.log("Venue: " + venue);
            console.log("Location: " + location);
            console.log("Date: " + date);
            console.log("--------------------------------------")
            }
        })
    .catch(function(error) {
       
        console.log(error)
    });
}

var getMovie = function(movieName) {
    if(movieName == undefined){
        movieName = "Mr. Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
        
            var res = response.data;
            var title = res.Title;
            var year = res.Year;
            var imdbRating = res.imdbRating;
            var country = res.Country;
            var language = res.Language;
            var plot = res.Plot;
            var actors = res.Actors
            var tomRating = "This movies has not been rated by Rotten Tomatoes";
                for(i=0; i<res.Ratings.length; i++){
                    if (res.Ratings[i].Source == "Rotten Tomatoes") {
                        tomRating = res.Ratings[i].Value;
                        }
                    }        
            console.log("Movie Name: " + title);
            console.log("Year: " + year);
            console.log("IMDB Rating: " + imdbRating);
            console.log("Rotten Tomatoes Rating: " + tomRating);
            console.log("Country: " + country);
            console.log("Language: " + language);
            console.log("Plot: " + plot);
            console.log("Actor: " + actors);
            console.log("--------------------------------------")
        })
        .catch(function(err){
            console.log(err);
        })

}

var getDoIt = function(fileName) {
    fs.readFile(fileName, "utf8", function(error, data) {
        console.log(fileName);
        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
        select(dataArr[0],dataArr[1]);
      });
}

var fullArg = process.argv.slice(3).join(' ');


 var runLiri = function(action, data){
     select(action, data);
 }

runLiri(process.argv[2], fullArg);
