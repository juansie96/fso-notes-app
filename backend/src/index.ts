import "module-alias/register";
import { Request } from "express";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import { unknownEndpoint } from "@/middlewares";
import noteRouter from "@/routes/note";
import "@/database";

const app = express();

morgan.token("body", (req: Request) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get('/version', (_,res) => res.json(1))
app.use("/api/notes", noteRouter);
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
