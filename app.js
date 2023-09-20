import express from "express";

const app = express();
app.use(express.json());

// req - request - tudo que o cliente enviou
// res - response - o que a gente vai enviar de volta
app.get("/", (req, res) => {
  res.send("Oi");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
