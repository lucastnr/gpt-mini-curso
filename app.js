import "dotenv/config.js";
import express from "express";
import { chat } from "./src/gpt.js";

const app = express();
app.use(express.json());

app.get("/chat", async (req, res) => {
  const { content } = req.query;

  if (!content) {
    res.status(400).send("O parâmetro content não foi passado");
    return;
  }

  const result = await chat(content);
  const assistantMessage = result.choices[0].message;

  res.send(assistantMessage);
});

// Query params
// localhost:3000/chat?content=Oi tudo bem?

app.use("/", express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
