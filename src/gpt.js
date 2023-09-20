import axios from "axios";

async function chat(message) {
  axios.post(
    "https://api.openai.com/v1/chat/completions",
    {},
    {
      headers: {
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
    }
  );
}
