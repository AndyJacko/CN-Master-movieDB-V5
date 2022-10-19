const Rating = require("../../models/rating");

const displayUpdatedRating = (rating) => {
  console.log(`\n\nRATING UPDATED\n--------------------\n`);

  console.log(`ID: ${rating.id}\nName: ${rating.name}\n`);
};

exports.updateRating = async (id, rating) => {
  let error;
  let updateRating = false;

  if (Number.isInteger(id)) {
    if (rating !== "" && rating !== true) {
      try {
        const selectedRating = await Rating.findAll({
          where: { id: id },
        });

        if (selectedRating[0]) {
          try {
            const updatedRating = await Rating.update(
              { name: rating },
              { where: { id: id } }
            );

            if (updatedRating[0] === 1) {
              const newRating = await Rating.findAll({
                where: { id: id },
              });
              displayUpdatedRating(newRating[0]);
              updateRating = true;
            } else {
              error = `Rating Could Not Be Updated`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = `No Rating Found With ID: ${id}`;
        }
      } catch (err) {
        error = err;
      }
    } else {
      error = `Unknown Rating Format`;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!updateRating) {
    console.log(`\n\nError: ${error}`);
  }
};
