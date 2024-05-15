// Import necessary modules
import express from "express";
import { config } from "dotenv";
import geminiVesion from "./gemini-vesion.js";
import { geminiStreamingModal } from "./gemini-streaming.js";
import { geminiChat } from "./gemini-chat.js";

// Load environment variables from .env file

// Create an Express app
const app = express();
config();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello Mars!");
    geminiVesion()
});
app.get("/streaming", (req, res) => {
    res.send("Hello Mars!");
    geminiStreamingModal()
});
app.get("/chat", (req, res) => {
    res.send("Hello Mars!");
    geminiChat()
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error(error);
        console.error("error while Running Server");
    }
});
