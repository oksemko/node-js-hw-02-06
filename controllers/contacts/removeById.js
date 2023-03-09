const { Contact } = require("../../models/contact");
const { CreateError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndRemove({ id });

  if (!result) {
    throw CreateError(404);
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
