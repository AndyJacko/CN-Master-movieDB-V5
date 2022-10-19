const Genre = require("../../models/genre");

const displayCreatedGenre = (genre) => {
  console.log(`\n\nGENRE CREATED\n--------------------\n`);

  console.log(`ID: ${genre.id}\nName: ${genre.name}\n`);
};

exports.createGenre = async (genre) => {
  let error;
  let addedGenre = false;

  if (genre && genre !== true && genre.trim().length > 0) {
    try {
      const genreExists = await Genre.findOne({
        where: { name: genre.trim() },
      });

      if (genreExists !== null) {
        error = "Genre Already In DB";
      } else {
        const newGenre = {
          name: genre.trim() || 0,
        };

        try {
          const saveOk = await Genre.create(newGenre);

          if (saveOk) {
            displayCreatedGenre(saveOk);
            addedGenre = true;
          } else {
            error = `Could Not Create Genre`;
          }
        } catch (err) {
          error = err;
        }
      }
    } catch (err) {
      error = err;
    }
  } else {
    error = `Invalid Genre Format`;
  }

  if (!addedGenre) {
    console.log(`\n\nError: ${error}`);
  }
};
