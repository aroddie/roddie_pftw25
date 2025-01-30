// Create Array
let movies = ["Dead Poets Society"," Tangled", " Whip It", " Barbie (2023)", " Rango"];

// // Print to Console
// console.log("My favorite movies: ", movies);

// Add user movie
let yourMovie = window.prompt("What is your favorite movie?");
movies.push(" " + yourMovie);
// console.log("Our favorite movies:", movies);

let ourMovies = movies.toString();
console.log("Our favorite movies are:", ourMovies);