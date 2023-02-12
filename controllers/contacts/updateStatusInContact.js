const { Contact } = require("../../models/contacts");
const CreateError = require("http-errors");

const updateStatusInContact = async (req, res) => {
  const { contactId: id } = req.params;
  const { favorite } = req.body;
  console.log(favorite);

  if (favorite === undefined) {
    throw new CreateError(400, "Favorite is undefined");
  }

  const result = await Contact.findByIdAndUpdate(
    { id },
    { favorite },
    {
      new: true,
    }
  );

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

module.exports = updateStatusInContact;
