const Rating = require("../../models/rating");

const displayCreatedRating = (rating) => {
  console.log(`\n\nRATING CREATED\n--------------------\n`);

  console.log(`ID: ${rating.id}\nName: ${rating.name}\n`);
};

exports.createRating = async (rating) => {
  let error;
  let addedRating = false;

  if (rating && rating !== true && rating.trim().length > 0) {
    try {
      const ratingExists = await Rating.findOne({
        where: { name: rating.trim() },
      });

      if (ratingExists !== null) {
        error = "Rating Already In DB";
      } else {
        const newRating = {
          name: rating.trim() || 0,
        };

        try {
          const saveOk = await Rating.create(newRating);

          if (saveOk) {
            displayCreatedRating(saveOk);
            addedRating = true;
          } else {
            error = `Could Not Create Rating`;
          }
        } catch (err) {
          error = err;
        }
      }
    } catch (err) {
      error = err;
    }
  } else {
    error = `Invalid Rating Format`;
  }

  if (!addedRating) {
    console.log(`\n\nError: ${error}`);
  }
};
