const { Contact } = require("../../models/contacts");
const CreateError = require("http-errors");

const removeById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndRemove({ id });

  if (!result) {
    throw new CreateError(404, "Not found");
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
