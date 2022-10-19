const Movie = require("../../models/movie");

const displayCreatedMovie = (movie) => {
  console.log(`\n\nMOVIE CREATED\n--------------------\n`);

  console.log(
    `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
      movie.actor
    }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
      movie.released
    }\nRating: ${movie.rating}\n`
  );
};

exports.createMovie = async (movie) => {
  let error;
  let addedMovie = false;

  if (movie && movie !== true) {
    const mov = movie.split(",");

    if (mov.length === 6) {
      try {
        const movieExists = await Movie.findOne({
          where: { title: mov[0].trim() },
        });

        if (movieExists !== null) {
          error = "Movie Already In DB";
        } else {
          const newMovie = {
            title: mov[0].trim() || "Not Specified",
            actor: mov[1].trim() || "Not Specified",
            director: mov[2].trim() || 0,
            genre: mov[3].trim() || 0,
            rating: mov[4].trim() || 0,
            released: mov[5].trim() || 0,
          };

          try {
            const saveOk = await Movie.create(newMovie);

            if (saveOk) {
              displayCreatedMovie(saveOk);
              addedMovie = true;
            } else {
              error = `Could Not Create Movie`;
            }
          } catch (err) {
            error = err;
          }
        }
      } catch (err) {
        error = err;
      }
    } else {
      error = `Invalid Movie Format`;
    }
  } else {
    error = `Unknown Movie Format`;
  }

  if (!addedMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
