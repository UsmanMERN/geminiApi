// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const fs = require("fs");

import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import fs from "fs"

// Access your API key as an environment variable (see "Set up your API key" above)
config()
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// console.log('process.env.API_KEY', process.env.API_KEY)
// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

export default async function geminiVesion() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "What's different between these pictures?";

    const imageParts = [
        fileToGenerativePart("image1.png", "image/png"),
        fileToGenerativePart("image.png", "image/png"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

// run();