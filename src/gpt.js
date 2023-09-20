import axios from "axios";

async function chat(message) {
  axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        }
      ]
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
    }
  );
}
