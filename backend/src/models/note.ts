import { Schema, model } from "mongoose";

export interface INote {
  content: string;
  important: boolean;
}

const noteSchema = new Schema<INote>(
  {
    content: { type: String, required: true },
    important: { type: Boolean, required: true },
  },
  { timestamps: true }
);

noteSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = model<INote>("Note", noteSchema);

export default Note;
