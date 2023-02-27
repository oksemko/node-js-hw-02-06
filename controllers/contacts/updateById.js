const { Contact } = require("../../models/contact");
const { CreateError } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndUpdate({ id });

  if (!result) {
    throw new CreateError(404);
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
