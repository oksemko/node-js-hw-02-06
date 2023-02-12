const { Contact } = require("../../models/contacts");
const CreateError = require("http-errors");

const updateById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndUpdate({ id });

  if (!result) {
    throw new CreateError(404, "Not found");
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
