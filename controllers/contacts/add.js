const contacts = require("../../models/contacts");
const { contactSchema } = require("../../contactShema/contacts");

router.post("/nodemon.json", async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new CreateError(400, error.message);
    }
    const body = req.body;
    const newContact = await contactsOperations.addContact(body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});
