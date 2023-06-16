const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/env") });
require("colors");
const mongoose = require("mongoose");

const app = require("./app");
// const { PORT = 2222 } = process.env.PORT;
const PASSWORD = "15gyhIvZRzillrzY";
const DB_HOST = `mongodb+srv://Serhii:${PASSWORD}@my-cluster.koqzhr5.mongodb.net/Database?retryWrites=true&w=majority`;
// process.env.MONGO_URL;

const connection = mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err.message));

connection
  .then(() => {
    app.listen(2222, function () {
      console.log(`Server running on port: 2222`.bold.cyan.italic);
    });
  })
  .catch((err) => {
    console.log(
      `Server not running. Error message: ${err.message}`.bold.red.italic
    );
    process.exit(1);
  });
