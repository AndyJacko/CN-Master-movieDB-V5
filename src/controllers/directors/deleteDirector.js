const Director = require("../../models/director");

const displayDeletedDirector = (director) => {
  console.log(`\n\nDIRECTOR DELETED\n--------------------\n`);

  console.log(`ID: ${director.id}\nName: ${director.name}\n`);
};

exports.deleteDirector = async (id) => {
  let error;
  let deletedDirector = false;

  if (Number.isInteger(id)) {
    try {
      const selectedDirector = await Director.findAll({
        where: { id: id },
      });

      if (selectedDirector[0]) {
        try {
          const delDirector = await Director.destroy({
            where: { id: id },
          });

          if (delDirector === 1) {
            displayDeletedDirector(selectedDirector[0]);
            deletedDirector = true;
          } else {
            error = `Director Could Not Be Deleted`;
          }
        } catch (err) {
          error = err;
        }
      } else {
        error = `No Director Found With ID: ${id}`;
      }
    } catch (err) {
      error = err;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!deletedDirector) {
    console.log(`\n\nError: ${error}`);
  }
};
