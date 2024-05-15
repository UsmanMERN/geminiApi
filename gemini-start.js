// const { GoogleGenerativeAI } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key as an environment variable (see "Set up your API key" above)
import { config } from "dotenv";

// Load environment variables from .env file
config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// console.log('process.env.API_KEY', process.env.API_KEY)
// ...

// const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});

// ...
async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();