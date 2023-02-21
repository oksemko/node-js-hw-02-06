const { Contact } = require("../../models/contacts");
const { createError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findById({ id });

  if (!result) {
    throw new createError(404);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
