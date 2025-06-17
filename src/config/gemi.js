


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCH7QhhU5XaWs7vHZpyJ5OOXVZCdMpmCvw" });

async function main(prompt) {
  const response = await ai.models.generateContent({
  prompt
  });
  console.log(response.text());
}

export default main;