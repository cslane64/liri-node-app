require("dotenv").config();

var Spotify = require("node-spotify-api");
var spotify = new Spotify({id: process.env.SPOTIFY_ID, secret: process.env.SPOTIFY_SECRET});

console.log(spotify);

var select = function(switchData, functionData) {
    switch(switchData) {
        case 'spotify-this' :
            getSpotify(functionData);
            break;
        case 'concert-this' :
            getConcert();
            break;
        case 'movie-this' :
            getMovie();
            break;
        case 'do-what it says' :
            getDoIt();
            break;
        default:
        console.log("Liri does not understand that request!")
    }
}
var getArtistNames = function(artist){
    return artist.name
}

var getSpotify = function(songName){
    spotify
    .search({ type: 'track', query: songName })
    .then(function(response) {
        debugger;
        var songs = response.tracks.items;
        console.log(songs);
        for (i = 0; i < songs.length; i++) {
            console.log(i+1);
            console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
            console.log("Song Name: " + songs[i].name);
            console.log("Preview link: " + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name);
            console.log("---------------------------------------------");
        }
      
        debugger;
      
    })
    .catch(function(err) {
      console.log(err);
    
      
      
      
})

}

 var runLiri = function(action, data){
     select(action, data);
 };

runLiri(process.argv[2], process.argv[3]);
