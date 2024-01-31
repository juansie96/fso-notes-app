import { Schema, model } from "mongoose";

export interface INote {
  _id: string;
  content: string;
  date: Date;
  important: boolean;
}

const noteSchema = new Schema<INote>({
  _id: { type: String, required: true },
  content: { type: String, required: true },
  important: String,
  // date: { type: Date, required: true }, // Is this necessary?
});

const Note = model<INote>("Note", noteSchema);

export default Note;
