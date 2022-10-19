const Genre = require("../../models/genre");

const displayUpdatedGenre = (genre) => {
  console.log(`\n\nGENRE UPDATED\n--------------------\n`);

  console.log(`ID: ${genre.id}\nName: ${genre.name}\n`);
};

exports.updateGenre = async (id, genre) => {
  let error;
  let updateGenre = false;

  if (Number.isInteger(id)) {
    if (genre !== "" && genre !== true) {
      try {
        const selectedGenre = await Genre.findAll({
          where: { id: id },
        });

        if (selectedGenre[0]) {
          try {
            const updatedGenre = await Genre.update(
              { name: genre },
              { where: { id: id } }
            );

            if (updatedGenre[0] === 1) {
              const newGenre = await Genre.findAll({
                where: { id: id },
              });
              displayUpdatedGenre(newGenre[0]);
              updateGenre = true;
            } else {
              error = `Genre Could Not Be Updated`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = `No Genre Found With ID: ${id}`;
        }
      } catch (err) {
        error = err;
      }
    } else {
      error = `Unknown Genre Format`;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!updateGenre) {
    console.log(`\n\nError: ${error}`);
  }
};
