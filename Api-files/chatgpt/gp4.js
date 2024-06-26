const express = require('express');
const fs = require('fs').promises;
const { G4F } = require('g4f');
const path = require('path');

const router = express.Router();
const g4f = new G4F();

exports.name = '/s4b1k/gpt4';
exports.index = async (req, res) => {
    const ask = req.query.ask;
    const id = req.query.id;

    if (!ask || !id) {
        return res.status(400).json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/gpt4?ask=your_ask&id=your_id\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
    }

    let messages = [];

    let filePath = path.join(__dirname, `/data/${id}.json`);

    try {
        const data = await fs.readFile(filePath, 'utf8');
        messages = JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
      
        messages = [{ role: "system", content: "You're a math teacher." }];
    }

    messages.push({ role: "user", content: ask });

    try {
        const response = await g4f.chatCompletion(messages);
        messages.push({ role: "assistant", content: response });

        await fs.writeFile(filePath, JSON.stringify(messages, null, 2));

        res.json({ eurix: response})
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};