const Director = require("../../models/director");

const displayAllDirectors = (directors) => {
  console.log(`\n\nANDY'S DIRECTOR DATABASE\n---------------------\n`);

  if (directors.length > 0) {
    directors.forEach((director) => {
      console.log(`ID: ${director.id}\nName: ${director.name}\n`);
    });
  } else {
    console.log(`No Directors In Database`);
  }
};

const displaySearchedDirectors = (directors) => {
  console.log(`\n\nDIRECTOR SEARCH RESULTS\n--------------------\n`);

  if (directors.length > 0) {
    directors.forEach((director) => {
      console.log(`ID: ${director.id}\nName: ${director.name}\n`);
    });
  } else {
    console.log(`No Directors Found`);
  }
};

exports.readDirectors = async (search, val) => {
  let error;
  let foundDirector = false;

  if (!search) {
    try {
      const allDirectors = await Director.findAll();
      foundDirector = true;
      displayAllDirectors(allDirectors);
    } catch (err) {
      error = err;
    }
  } else {
    switch (search) {
      case "id":
        if (Number.isInteger(val)) {
          try {
            const selectedDirector = await Director.findAll({
              where: { id: val },
            });

            if (selectedDirector[0]) {
              foundDirector = true;
              displaySearchedDirectors(selectedDirector);
            } else {
              error = `Nothing Found For ID: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = `Unknown ID Format`;
        }
        break;

      case "name":
        if (val !== "" && val !== true) {
          try {
            const selectedDirector = await Director.findAll({
              where: { name: val },
            });

            if (selectedDirector[0]) {
              foundDirector = true;
              displaySearchedDirectors(selectedDirector);
            } else {
              error = `Nothing Found For Name: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Name Format";
        }
        break;
    }
  }

  if (!foundDirector) {
    console.log(`\n\nError: ${error}`);
  }
};
