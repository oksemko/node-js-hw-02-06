const mongoose = require("mongoose");
const app = require("./app");

// In this stage we have warning about Mongoose: the `strictQuery` option
// will be switched back to `false` by default in Mongoose 7 (now we use dependency "mongoose": "^6.9.1").
// So we should use `mongoose.set('strictQuery', false);`---> if we want to prepare
// for this change. Or use `mongoose.set('strictQuery', true); ---> to suppress this warning.
mongoose.set("strictQuery", true);

const { DB_HOST, PORT = 3000 } = process.env;

// Connection string into application code:
// DB_HOST =
//   "mongodb+srv://nodeuser:<password>@cluster0.d4i3rdp.mongodb.net/db-contacts?retryWrites=true&w=majority";
// ------>>> Don`t forget to replace <password> with the password for the nodeuser user.

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
