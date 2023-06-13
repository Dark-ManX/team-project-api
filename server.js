const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/env") });
require("colors");
const mongoose = require("mongoose");

const app = require("./app");
const { PORT = 2222 } = process.env.PORT;
const DB_HOST = process.env.MONGO_URL;

const connection = mongoose.connect(DB_HOST, {
  promiseLibrary: global.Promise,
  useUnifiedTopology: true,
});

connection
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running on port: ${PORT}`.bold.cyan.italic);
    });
  })
  .catch((err) => {
    console.log(
      `Server not running. Error message: ${err.message}`.bold.red.italic
    );
    process.exit(1);
  });
