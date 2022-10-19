const Rating = require("../../models/rating");

const displayAllRatings = (ratings) => {
  console.log(`\n\nANDY'S RATING DATABASE\n---------------------\n`);

  if (ratings.length > 0) {
    ratings.forEach((rating) => {
      console.log(`ID: ${rating.id}\nName: ${rating.name}\n`);
    });
  } else {
    console.log(`No Ratings In Database`);
  }
};

const displaySearchedRatings = (ratings) => {
  console.log(`\n\nRATING SEARCH RESULTS\n--------------------\n`);

  if (ratings.length > 0) {
    ratings.forEach((rating) => {
      console.log(`ID: ${rating.id}\nName: ${rating.name}\n`);
    });
  } else {
    console.log(`No Ratings Found`);
  }
};

exports.readRatings = async (search, val) => {
  let error;
  let foundRating = false;

  if (!search) {
    try {
      const allRatings = await Rating.findAll();
      foundRating = true;
      displayAllRatings(allRatings);
    } catch (err) {
      error = err;
    }
  } else {
    switch (search) {
      case "id":
        if (Number.isInteger(val)) {
          try {
            const selectedRating = await Rating.findAll({
              where: { id: val },
            });

            if (selectedRating[0]) {
              foundRating = true;
              displaySearchedRatings(selectedRating);
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
            const selectedRating = await Rating.findAll({
              where: { name: val },
            });

            if (selectedRating[0]) {
              foundRating = true;
              displaySearchedRatings(selectedRating);
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

  if (!foundRating) {
    console.log(`\n\nError: ${error}`);
  }
};
