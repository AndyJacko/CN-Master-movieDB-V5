const { sequelize } = require("./db/conn");
const yargs = require("yargs/yargs")(process.argv.slice(2)).argv;

const { createMovie } = require("./controllers/movies/createMovie");
const { readMovies } = require("./controllers/movies/readMovies");
const { updateMovie } = require("./controllers/movies/updateMovie");
const { deleteMovie } = require("./controllers/movies/deleteMovie");

const { createDirector } = require("./controllers/directors/createDirector");
const { readDirectors } = require("./controllers/directors/readDirectors");
const { updateDirector } = require("./controllers/directors/updateDirector");
const { deleteDirector } = require("./controllers/directors/deleteDirector");

const { createGenre } = require("./controllers/genres/createGenre");
const { readGenres } = require("./controllers/genres/readGenres");
const { updateGenre } = require("./controllers/genres/updateGenre");
const { deleteGenre } = require("./controllers/genres/deleteGenre");

const { createRating } = require("./controllers/ratings/createRating");
const { readRatings } = require("./controllers/ratings/readRatings");
const { updateRating } = require("./controllers/ratings/updateRating");
const { deleteRating } = require("./controllers/ratings/deleteRating");

const app = async (yargs) => {
  if (yargs.action && yargs.action.length > 0) {
    try {
      await sequelize.sync();

      switch (yargs.action) {
        case "createMovie":
          await createMovie(yargs.movie);
          break;

        case "readMovie":
          if (yargs.search) {
            await readMovies(yargs.search, yargs.val);
          } else {
            await readMovies();
          }
          break;

        case "updateMovie":
          await updateMovie(yargs.id, yargs.movie);
          break;

        case "deleteMovie":
          await deleteMovie(yargs.id);
          break;

        case "createDirector":
          await createDirector(yargs.director);
          break;

        case "readDirector":
          if (yargs.search) {
            await readDirectors(yargs.search, yargs.val);
          } else {
            await readDirectors();
          }
          break;

        case "updateDirector":
          await updateDirector(yargs.id, yargs.director);
          break;

        case "deleteDirector":
          await deleteDirector(yargs.id);
          break;

        case "createGenre":
          await createGenre(yargs.genre);
          break;

        case "readGenre":
          if (yargs.search) {
            await readGenres(yargs.search, yargs.val);
          } else {
            await readGenres();
          }
          break;

        case "updateGenre":
          await updateGenre(yargs.id, yargs.rating);
          break;

        case "deleteGenre":
          await deleteGenre(yargs.id);
          break;

        case "createRating":
          await createRating(yargs.rating);
          break;

        case "readRating":
          if (yargs.search) {
            await readRatings(yargs.search, yargs.val);
          } else {
            await readRatings();
          }
          break;

        case "updateRating":
          await updateRating(yargs.id, yargs.rating);
          break;

        case "deleteRating":
          await deleteRating(yargs.id);
          break;

        default:
          console.log(`\n\nUnknown Action`);
          break;
      }

      await sequelize.close();
    } catch (err) {
      console.log(err);
      await sequelize.close();
    }
  } else {
    console.log(`\n\nNo Action Supplied`);
  }
};

app(yargs);
