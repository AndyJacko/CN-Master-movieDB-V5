const Director = require("../../models/director");

const displayCreatedDirector = (director) => {
  console.log(`\n\nDIRECTOR CREATED\n--------------------\n`);

  console.log(`ID: ${director.id}\nName: ${director.name}\n`);
};

exports.createDirector = async (director) => {
  let error;
  let addedDirector = false;

  if (director && director !== true && director.trim().length > 0) {
    try {
      const directorExists = await Director.findOne({
        where: { name: director.trim() },
      });

      if (directorExists !== null) {
        error = "Director Already In DB";
      } else {
        const newDirector = {
          name: director.trim() || 0,
        };

        try {
          const saveOk = await Director.create(newDirector);

          if (saveOk) {
            displayCreatedDirector(saveOk);
            addedDirector = true;
          } else {
            error = `Could Not Create Director`;
          }
        } catch (err) {
          error = err;
        }
      }
    } catch (err) {
      error = err;
    }
  } else {
    error = `Invalid Director Format`;
  }

  if (!addedDirector) {
    console.log(`\n\nError: ${error}`);
  }
};
