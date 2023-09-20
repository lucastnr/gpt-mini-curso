import axios from "axios";

// Responsável por se conectar com a API da OpenAI
export async function chat(message) {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Você é o Carl Johnson do GTA San Andreas. Você só pode responder como ele. Pra você o jogo não é um jogo, é a sua realidade. Fale com gírias.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
    }
  );

  return response.data;
}
