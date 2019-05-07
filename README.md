LIRI-Bot
LIRI is similar to iPhone's SIRI or Amazon's Alexa. However, while those are Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node JS app that takes in input from the user and returns the requested data.

LIRI uses the following commands:
spotify-this-song
concert-this
movie-this
do-what-it-says
Technologies used:
Node.js
Javascript
npm packages:
spotify - A simple to use API library for the Spotify REST API.
axios - Promise based HTTP client for the browser and node.js
fs - used to interact with the file system to read the random.txt file.
dotenv - Dotenv is a module that loads environment variables from a .env file into process.env. It is used in this project to store the spotify API keys.
moment - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
How to Run LIRI-Bot
Step One: node liri spotify-this-song <song name here>.

This will show the following information about the song in your terminal/bash window:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from

Step Two: node liri concert-this <artist name here>

This will show the following concert information about the artirst you chose.

Name of the venue
Venue location
Date of the Event
     

Step Three: node liri.js movie-this <movie name here>.

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.

Step Four: node liri.js do-what-it-says

This will output the command placed in random.txt file and execute it.

