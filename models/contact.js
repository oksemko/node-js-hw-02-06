const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      minlength: [3, "Must be at least 3, got {VALUE}"],
      match: /^[a-zA-Z ]+$/,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
      unique: true,
      trim: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    //  User sees only his contacts acc to the property below
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchemaAll = Joi.object({
  name: Joi.string().min(3).trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string().min(3).required(),
  favorite: Joi.boolean(),
  owner: Joi.string(),
});

const joiSchemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  joiSchemaAll,
  joiSchemaFavorite,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
