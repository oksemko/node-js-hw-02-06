const { json } = require("express");
const express = require("express");
const Joi = require("joi");

const contactsOperations = require("../../models/contacts");

const contactsShema = Joi.object({
  name: Joi.string()
    .min(3)
    .pattern(/^[a-zA-Z]+$/)
    .required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[0-9]+-[0-9]+$/, "numbers")
    .required(),
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId: id } = req.params;
    const contact = await contactsOperations.getContactById(id);
    if (!contact) {
      throw new CreateError(404, "Not found");
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
