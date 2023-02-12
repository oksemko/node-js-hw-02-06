const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const removeById = require("./removeById");
const updateById = require("./updateById");
const updateStatusInContact = require("./updateStatusInContact.js");

module.exports = {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateStatusInContact,
};
