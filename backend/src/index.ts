require("module-alias/register");
import { Request, Response } from "express";

import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const unknownEndpoint = (_: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

morgan.token("body", (req: Request) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/api/notes", (_: Request, res: Response) => {
  // res.json(notes);
});

app.post("/api/notes", (request: Request, response: Response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
  };

  // notes = notes.concat(note);

  response.json(note);
});

app.get("/api/notes/:id", (request: Request, response: Response) => {
  // const id = Number(request.params.id);
  // const note = notes.find((note) => note.id === id);
  // if (note) {
  //   response.json(note);
  // } else {
  //   response.status(404).end();
  // }
  // response.json(note);
});

app.delete("/api/notes/:id", (request: Request, response: Response) => {
  // const id = Number(request.params.id);
  // notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
