const { sequelize } = require("./db/conn");
const yargs = require("yargs/yargs")(process.argv.slice(2)).argv;

const { createMovie } = require("./controllers/movies/createMovie");
const { readMovies } = require("./controllers/movies/readMovies");
const { updateMovie } = require("./controllers/movies/updateMovie");
const { deleteMovie } = require("./controllers/movies/deleteMovie");

const app = async (yargs) => {
  if (yargs.action && yargs.action.length > 0) {
    try {
      await sequalize.sync();

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
