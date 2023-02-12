const { isValidObjectId } = require("mongoose");
const createError = require("./createError");

const isValidById = (req, res, next) => {
  const { contactId: id } = req.params;
  const result = isValidObjectId({ id });

  if (!result) {
    const error = createError(400, "Invalid id");

    return next(error);
  }
  next();
};

module.exports = isValidById;
