const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = encodeURIComponent(process.argv[2]);
console.log(password);
// const password = process.argv[2];

// const url = `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://pulga666:${password}@cluster-nodejs.rqvnt.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(uri);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});

// const note = new Note({
//   content: "AMUCHITAAAAAAAA",
//   important: true,
// });

// note.save().then((result) => {
//   console.log("note saved!");
//   console.log(result);
//   mongoose.connection.close();
// });
