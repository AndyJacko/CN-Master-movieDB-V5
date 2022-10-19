const Movie = require("../../models/movie");

const displayDeletedMovie = (movie) => {
  console.log(`\n\nMOVIE DELETED\n--------------------\n`);

  console.log(
    `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
      movie.actor
    }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
      movie.released
    }\nRating: ${movie.rating}\n`
  );
};

exports.deleteMovie = async (id) => {
  let error;
  let deletedMovie = false;

  if (Number.isInteger(id)) {
    try {
      const selectedMovie = await Movie.findAll({
        where: { id: id },
      });

      if (selectedMovie[0]) {
        try {
          const delMovie = await Movie.destroy({
            where: { id: id },
          });

          if (delMovie === 1) {
            displayDeletedMovie(selectedMovie[0]);
            deletedMovie = true;
          } else {
            error = `Movie Could Not Be Deleted`;
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
    error = `Unknown ID Format`;
  }

  if (!deletedMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
