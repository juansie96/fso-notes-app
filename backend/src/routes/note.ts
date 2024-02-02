import { Router } from "express";

import {
  getAllNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from "@/controllers/note";

const noteRouter = Router();

noteRouter.get("/", getAllNotes);
noteRouter.post("/", createNote);
noteRouter.get("/:noteId", getNote);
noteRouter.put("/:noteId", updateNote);
noteRouter.delete("/:noteId", deleteNote);

export default noteRouter;
