const Rating = require("../../models/rating");

const displayDeletedRating = (rating) => {
  console.log(`\n\nRATING DELETED\n--------------------\n`);

  console.log(`ID: ${rating.id}\nName: ${rating.name}\n`);
};

exports.deleteRating = async (id) => {
  let error;
  let deletedRating = false;

  if (Number.isInteger(id)) {
    try {
      const selectedRating = await Rating.findAll({
        where: { id: id },
      });

      if (selectedRating[0]) {
        try {
          const delRating = await Rating.destroy({
            where: { id: id },
          });

          if (delRating === 1) {
            displayDeletedRating(selectedRating[0]);
            deletedRating = true;
          } else {
            error = `Rating Could Not Be Deleted`;
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
    error = `Unknown ID Format`;
  }

  if (!deletedRating) {
    console.log(`\n\nError: ${error}`);
  }
};
