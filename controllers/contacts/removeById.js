const { Contact } = require("../../models/contacts");
const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndRemove({ id });

  if (!result) {
    throw new createError(404);
  }

  res.json({
    status: "success",
    code: 200,
    message: "Contact was removed",
    data: {
      result,
    },
  });
};

module.exports = removeById;
