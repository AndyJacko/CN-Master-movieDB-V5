const Genre = require("../../models/genre");

const displayAllGenres = (genres) => {
  console.log(`\n\nANDY'S GENRE DATABASE\n---------------------\n`);

  if (genres.length > 0) {
    genres.forEach((genre) => {
      console.log(`ID: ${genre.id}\nName: ${genre.name}\n`);
    });
  } else {
    console.log(`No Genres In Database`);
  }
};

const displaySearchedGenres = (genres) => {
  console.log(`\n\nGENRE SEARCH RESULTS\n--------------------\n`);

  if (genres.length > 0) {
    genres.forEach((genre) => {
      console.log(`ID: ${genre.id}\nName: ${genre.name}\n`);
    });
  } else {
    console.log(`No Genres Found`);
  }
};

exports.readGenres = async (search, val) => {
  let error;
  let foundGenre = false;

  if (!search) {
    try {
      const allGenres = await Genre.findAll();
      foundGenre = true;
      displayAllGenres(allGenres);
    } catch (err) {
      error = err;
    }
  } else {
    switch (search) {
      case "id":
        if (Number.isInteger(val)) {
          try {
            const selectedGenre = await Genre.findAll({
              where: { id: val },
            });

            if (selectedGenre[0]) {
              foundGenre = true;
              displaySearchedGenres(selectedGenre);
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
            const selectedGenre = await Genre.findAll({
              where: { name: val },
            });

            if (selectedGenre[0]) {
              foundGenre = true;
              displaySearchedGenres(selectedGenre);
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

  if (!foundGenre) {
    console.log(`\n\nError: ${error}`);
  }
};
