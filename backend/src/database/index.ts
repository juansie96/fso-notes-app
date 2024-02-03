const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const url = process.env.DATABASE_URL;
console.log(url);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error: Error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
