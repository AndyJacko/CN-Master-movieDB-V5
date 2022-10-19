const Director = require("../../models/director");

const displayUpdatedDirector = (director) => {
  console.log(`\n\nDIRECTOR UPDATED\n--------------------\n`);

  console.log(`ID: ${director.id}\nName: ${director.name}\n`);
};

exports.updateDirector = async (id, director) => {
  let error;
  let updateDirector = false;

  if (Number.isInteger(id)) {
    if (director !== "" && director !== true) {
      try {
        const selectedDirector = await Director.findAll({
          where: { id: id },
        });

        if (selectedDirector[0]) {
          try {
            const updatedDirector = await Director.update(
              { name: director },
              { where: { id: id } }
            );

            if (updatedDirector[0] === 1) {
              const newDirector = await Director.findAll({
                where: { id: id },
              });
              displayUpdatedDirector(newDirector[0]);
              updateDirector = true;
            } else {
              error = `Director Could Not Be Updated`;
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
      error = `Unknown Director Format`;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!updateDirector) {
    console.log(`\n\nError: ${error}`);
  }
};
