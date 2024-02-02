import "module-alias/register";
import { Request } from "express";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { unknownEndpoint } from "@/middlewares";
import noteRouter from "@/routes/note";

dotenv.config();
const app = express();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);

morgan.token("body", (req: Request) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.use("/api/notes", noteRouter);
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
