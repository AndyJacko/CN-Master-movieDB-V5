const Movie = require("../../models/movie");
const Director = require("../../models/director");
const Genre = require("../../models/genre");
const Rating = require("../../models/rating");

const getDirector = async (id) => {
  const res = await Director.findAll({ where: { id: id } });
  console.log(res)
};

const getGenre = async (id) => {};

const getRating = async (id) => {};

const displayAllMovies = (movies) => {
  console.log(`\n\nANDY'S MOVIE DATABASE\n---------------------\n`);

  if (movies.length > 0) {
    movies.forEach((movie) => {
      console.log(
        `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
          movie.actor
        }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
          movie.released
        }\nRating: ${movie.rating}\n`
      );
    });
  } else {
    console.log(`No Movies In Database`);
  }
};

const displaySearchedMovies = (movies) => {
  console.log(`\n\nMOVIE SEARCH RESULTS\n--------------------\n`);

  if (movies.length > 0) {
    movies.forEach((movie) => {
      console.log(
        `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
          movie.actor
        }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
          movie.released
        }\nRating: ${movie.rating}\n`
      );
    });
  } else {
    console.log(`No Movies Found`);
  }
};

exports.readMovies = async (search, val) => {
  let error;
  let foundMovie = false;

  if (!search) {
    try {
      const allMovies = await Movie.findAll();
      foundMovie = true;
      displayAllMovies(allMovies);
    } catch (err) {
      error = err;
    }
  } else {
    switch (search) {
      case "id":
        if (Number.isInteger(val)) {
          try {
            const selectedMovie = await Movie.findAll({ where: { id: val } });

            if (selectedMovie[0]) {
              foundMovie = true;
              displaySearchedMovies(selectedMovie);
            } else {
              error = `Nothing Found For ID: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = `Unknown ID Format`;
        }
        break;

      case "title":
        if (val !== "" && val !== true) {
          try {
            const selectedMovie = await Movie.findAll({
              where: { title: val },
            });

            if (selectedMovie[0]) {
              foundMovie = true;
              displaySearchedMovies(selectedMovie);
            } else {
              error = `Nothing Found For Title: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Title Format";
        }
        break;

      case "actor":
        if (val !== "" && val !== true) {
          try {
            const selectedMovies = await Movie.findAll({
              where: { actor: val },
            });

            if (selectedMovies[0]) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Actor: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Actor Format";
        }
        break;

      case "director":
        if (val !== "" && val !== true) {
          try {
            const getDirector = await Director.findAll({
              where: { name: val },
            });

            if (getDirector[0]) {
              const selectedMovies = await Movie.findAll({
                where: { director: getDirector[0].id },
              });

              if (selectedMovies[0]) {
                foundMovie = true;
                displaySearchedMovies(selectedMovies);
              } else {
                error = `Nothing Found For Director: "${val}"`;
              }
            } else {
              error = `Director: "${val}" Not Found`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Director Format";
        }
        break;

      case "genre":
        if (val !== "" && val !== true) {
          try {
            const getGenre = await Genre.findAll({
              where: { name: val },
            });

            if (getGenre[0]) {
              const selectedMovies = await Movie.findAll({
                where: { genre: getGenre[0].id },
              });

              if (selectedMovies[0]) {
                foundMovie = true;
                displaySearchedMovies(selectedMovies);
              } else {
                error = `Nothing Found For Genre: "${val}"`;
              }
            } else {
              error = `Genre: "${val}" Not Found`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Genre Format";
        }
        break;

      case "released":
        if (Number.isInteger(val)) {
          try {
            const selectedMovies = await Movie.findAll({
              where: { released: val },
            });

            if (selectedMovies.length > 0) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Release Year: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Release Year Format";
        }
        break;

      case "rating":
        if (Number.isInteger(val)) {
          try {
            const getRating = await Rating.findAll({
              where: { id: val },
            });

            if (getRating[0]) {
              const selectedMovies = await Movie.findAll({
                where: { rating: getRating[0].id },
              });

              if (selectedMovies[0]) {
                foundMovie = true;
                displaySearchedMovies(selectedMovies);
              } else {
                error = `Nothing Found For Rating: "${val}"`;
              }
            } else {
              error = `Rating: "${val}" Not Found`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Rating Format";
        }
        break;
    }
  }

  if (!foundMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
