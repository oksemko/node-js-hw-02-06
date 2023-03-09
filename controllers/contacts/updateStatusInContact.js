const { Contact } = require("../../models/contact");
const { CreateError } = require("../../helpers");

const updateStatusInContact = async (req, res) => {
  const { contactId: id } = req.params;
  const { favorite } = req.body;
  console.log(favorite);

  if (favorite === undefined) {
    throw CreateError(400, "favorite is undefined");
  }

  const result = await Contact.findByIdAndUpdate(
    { id },
    { favorite },
    {
      new: true,
    }
  );

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

module.exports = updateStatusInContact;
