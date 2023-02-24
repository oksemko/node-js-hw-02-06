const { Contact } = require("../../models/contact");
const { createError } = require("../../helpers");

const updateStatusInContact = async (req, res) => {
  const { contactId: id } = req.params;
  const { favorite } = req.body;
  console.log(favorite);

  if (favorite === undefined) {
    throw new createError(400, "Favorite is undefined");
  }

  const result = await Contact.findByIdAndUpdate(
    { id },
    { favorite },
    {
      new: true,
    }
  );

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

module.exports = updateStatusInContact;
