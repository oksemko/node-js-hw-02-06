const express = require("express");
const controllers = require("../../controllers/users");
const { schemas } = require("../../models/user");
const { controllerWrapper, validation } = require("../../helpers");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post(
  "/signup",
  validation(schemas.joiSignupSchema),
  controllerWrapper(controllers.signup)
);

router.post(
  "/login",
  validation(schemas.joiLoginSchema),
  controllerWrapper(controllers.login)
);

router.get("/current", authenticate, controllerWrapper(controllers.getCurrent));

router.get("/logout", authenticate, controllerWrapper(controllers.logout));

router.patch(
  "/",
  authenticate,
  validation(schemas.joiSubscriptionSchema),
  controllerWrapper(controllers.updateSubscription)
);

module.exports = router;
