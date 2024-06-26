const { Hercai } = require("hercai");

const herc = new Hercai();

exports.name = '/s4b1k/hercai';
exports.index = async (req, res) => {
  const ask = req.query.ask.toLowerCase();

  if (!ask) {
    return res.status(400).json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/hercai?ask=${your-ask}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
  }

  try {
    const response = await herc.question({ model: "v1", content: ask });
    return res.json({ answer: response.reply });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};