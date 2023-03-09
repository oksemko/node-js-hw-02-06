const { Contact } = require("../../models/contact");
const { CreateError } = require("../../helpers");

const updateById = async (req, res, next) => {
  const { contactId: id } = req.params;
  const result = await Contact.findByIdAndUpdate({ id }, req.body, {
    new: true,
  });

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

module.exports = updateById;
