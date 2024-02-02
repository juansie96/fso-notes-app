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

const Note = model<INote>("Note", noteSchema);

export default Note;
