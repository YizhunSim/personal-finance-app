//Implementation of Category routes
const model = require("../models/index.js");
const Category = model.CATEGORY;
const Op = model.Sequelize.Op;

// Find all category
module.exports.findAllCategory = (req, res) => {
  Category.findAll({
    where: {
      [Op.and]: { STAT: "A" },
      NAME: {
        [Op.ne]: "Revenue"
      }
    },
    order: [["CATEGORY_ID", "ASC"]]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occured while retrieving the categories.`
      });
    });
};
