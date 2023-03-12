// bcrypt is an adaptive function which incorporates a salt
// to protect against rainbow table attacks

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { createError } = require("../../helpers");

const { SECRET_KEY = "SUCCESS" } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(401, "Email or password is wrong");
  }

  if (!user.verify) {
    throw createError(401, "Email or password not verify ");
  }

  const compareResult = await bcrypt.compareSync(password, user.password);

  if (!compareResult) {
    throw createError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
        avatarURL: user.avatarURL,
      },
    },
  });
};

module.exports = login;
