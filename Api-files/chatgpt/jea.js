const axios = require("axios");

exports.name = "/s4b1k/jea"; 
exports.index = async function (req, res, next) {
  try {
    const ask = req.query.ask;
    if(!ask) {
    return res.json({error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)"})
    }

    const response = await axios.get(`https://lianeapi.onrender.com/@unregistered/api/jea`, {
      params: {
        key: "j86bwkwo-8hako-12C",
        query: ask,
      }
    });
    const result = response.data.message;
    res.json({
      message: `✨ Jea 
━━━━━━━━━━━━━━━
${result}`,
    });

  } catch (error) {
    console.error(error); 
    res.json({ error: "An error occurred while processing your request." });
  }
};