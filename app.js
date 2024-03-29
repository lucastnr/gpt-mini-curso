import "dotenv/config.js";
import express from "express";
import { chat } from "./src/gpt.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const chats = [];

app.get("/chat", async (req, res) => {
  let { content, id } = req.query;

  if (!content) {
    res.status(400).send("O parâmetro content não foi passado");
    return;
  }

  if (!id) {
    // Novo chat, iniciando o chat do zero, primeira mensagem
    const length = chats.push([]);
    id = length - 1;
  }

  // Adiciona mensagem do usuário no chat
  chats[id].push({ content: content, role: "user" });

  const result = await chat(chats[id]);
  const assistantMessage = result.choices[0].message;

  // Adiciona mensagem da IA no chat
  chats[id].push(assistantMessage);

  console.log(chats);

  res.send({
    ...assistantMessage,
    id,
  });
});

// Query params
// localhost:3000/chat?content=Oi tudo bem?

app.use("/", express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
