const fs = require("fs/promises");
const path = require("path");
const jimp = require("jimp");
// jimp --->>> An image processing library written entirely
// in JavaScript(i.e.zero external or native dependencies).

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarDir, imageName);

    jimp
      .read(tempUpload)
      .then((image) => image.resize(250, 250).write(resultUpload))
      .catch((error) => console.log(error));

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatars", imageName);
    // "avatarURL": "avatars\\640d121a8329d908e57af030_avatar-default.png";
    //  "avatarURL": "640d121a8329d908e57af030_user_avatar_default.jpg";
    await User.findByIdAndUpdate(req.user._id, { avatarURL });

    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);

    throw error;
  }
};

module.exports = updateAvatar;
