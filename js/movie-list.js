/*
Daily Coding Challenge: Movie List Challenge

1. Create an array of objects of your 5 favorite movies

a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)

    b. Create a function that when called loops through your array and console.logs
the details for each of your movies

c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you search by different titles
files to create: movie-list.html, movie-list.js

*/

const movies = [
    {
        name: "Howl's Moving Castle",
        year: 2004,
        genre: ['Animation', 'Adventure', 'Family'],
        description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        imdbRating: 8.2
    },
    {
        name: "Spirited Away",
        year: 2001,
        genre: ['Animation', 'Adventure', 'Family'],
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        imdbRating: 8.6
    },
    {
        name: "Final Fantasy VII: Advent Children",
        year: 2005,
        genre: ['Animation', 'Action', 'Adventure'],
        description: "An ex-mercenary is forced out of isolation when three mysterious men kidnap and brainwash the city's children afflicted with the Geostigma disease.",
        imdbRating: 7.2
    },
    {
        name: "Violet Evergarden: The Movie",
        year: 2020,
        genre: ['Animation', 'Drama', 'Fantasy'],
        description: "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns , she goes back to her past to feel the true feelings of the Major's ,'I love you.'",
        imdbRating: 8.3
    },
    {
        name: "Hetalia: Axis Powers - Paint It, White!",
        year: 2010,
        genre: ['Animation, Adventure, Comedy'],
        description: "The Axis Powers must band together to save the world from aliens who are painting everything white.",
        imdbRating: 6.6
    }
];

// movie represents each instance in the array
const moviesDetails = () => {
    movies.forEach(movie => {
        console.log(movie);
    });
}

moviesDetails();

const movieDetails = (movieTitle) => {
    const foundItem = movies.find(movie => {
        return movie.name === movieTitle;
    });
    console.log(foundItem);
}

movieDetails("Howl's Moving Castle");
movieDetails("Violet Evergarden: The Movie");