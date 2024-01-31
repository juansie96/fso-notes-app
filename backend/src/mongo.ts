import mongoose from "mongoose";
import Note from "./models/note";

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = encodeURIComponent(process.argv[2]);
const url = `mongodb+srv://pulga666:${password}@cluster-nodejs.rqvnt.mongodb.net/phonebookApp?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose.connect(url);

if (process.argv.length === 3) {
  Note.find({}).then((result) => {
    console.log("Notes:");
    result.forEach((note) => {
      console.log(`${note.content} ${note.important}`);
    });
    mongoose.connection.close();
  });
}
