const Movie = require("../../models/movie");

const displayUpdatedMovie = (movie) => {
  console.log(`\n\nMOVIE UPDATED\n--------------------\n`);

  console.log(
    `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
      movie.actor
    }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
      movie.released
    }\nRating: ${movie.rating}\n`
  );
};

exports.updateMovie = async (id, movie) => {
  let error;
  let updateMovie = false;

  if (Number.isInteger(id)) {
    if (movie !== "" && movie !== true) {
      const mov = movie.split(",");

      if (mov.length === 6) {
        try {
          const selectedMovie = await Movie.findAll({
            where: { id: id },
          });

          if (selectedMovie[0]) {
            try {
              const updatedMovie = await Movie.update(
                {
                  title: mov[0].trim() || "Not Specified",
                  actor: mov[1].trim() || "Not Specified",
                  director: mov[2].trim() || 0,
                  genre: mov[3].trim() || 0,
                  rating: mov[4].trim() || 0,
                  released: mov[5].trim() || 0,
                },
                { where: { id: id } }
              );

              if (updatedMovie[0] === 1) {
                const newMovie = await Movie.findAll({
                  where: { id: id },
                });
                displayUpdatedMovie(newMovie[0]);
                updateMovie = true;
              } else {
                error = `Movie Could Not Be Updated`;
              }
            } catch (err) {
              error = err;
            }
          } else {
            error = `No Movie Found With ID: ${id}`;
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
  } else {
    error = `Unknown ID Format`;
  }

  if (!updateMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
