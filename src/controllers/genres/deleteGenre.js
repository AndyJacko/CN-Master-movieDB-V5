const Genre = require("../../models/genre");

const displayDeletedGenre = (genre) => {
  console.log(`\n\nGENRE DELETED\n--------------------\n`);

  console.log(`ID: ${genre.id}\nName: ${genre.name}\n`);
};

exports.deleteGenre = async (id) => {
  let error;
  let deletedGenre = false;

  if (Number.isInteger(id)) {
    try {
      const selectedGenre = await Genre.findAll({
        where: { id: id },
      });

      if (selectedGenre[0]) {
        try {
          const delGenre = await Genre.destroy({
            where: { id: id },
          });

          if (delGenre === 1) {
            displayDeletedGenre(selectedGenre[0]);
            deletedGenre = true;
          } else {
            error = `Genre Could Not Be Deleted`;
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
    error = `Unknown ID Format`;
  }

  if (!deletedGenre) {
    console.log(`\n\nError: ${error}`);
  }
};
