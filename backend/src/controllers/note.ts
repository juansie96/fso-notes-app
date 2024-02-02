import Note from "@/models/note";
import { Request, Response } from "express";

const getAllNotes = async (req: Request, res: Response) => {
  const notes = await Note.find({});
  res.json(notes);
};

const getNote = async (req: Request, res: Response) => {
  const note = await Note.findById(req.params.noteId);
  res.json(note);
};

const createNote = async (req: Request, res: Response) => {
  const { content, important } = req.body;
  const note = new Note({
    content,
    important,
  });
  const savedNote = await note.save();
  res.json(savedNote);
};

const updateNote = async (req: Request, res: Response) => {
  const { content, important } = req.body;
  const note = {
    content,
    important,
  };
  const updatedNote = await Note.findByIdAndUpdate(req.params.noteId, note, {
    new: true,
  });
  res.json(updatedNote);
};

const deleteNote = async (req: Request, res: Response) => {
  await Note.findByIdAndDelete(req.params.noteId);
  res.status(204).end();
};

export { getAllNotes, getNote, createNote, updateNote, deleteNote };
