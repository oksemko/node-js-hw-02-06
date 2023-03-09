const { Contact } = require("../../models/contact");
const { CreateError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findById({ id });

  if (!result) {
    throw CreateError(404);
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
