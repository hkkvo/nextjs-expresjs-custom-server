const mongoose = require("mongoose");

const Connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("connected to database");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error in database connection: " + err);
  });
};

module.exports = Connection;
