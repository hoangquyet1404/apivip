const axios = require("axios");

exports.name = "/tinyurl";
exports.index = async function (req, res, next) {
  try {
    const url = req.query.url;
    if (!url) {
      res.json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/tinyurl?url=${your_link}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
    }

    const response = await axios.get(
      `${global.config.tinyurl}/api-create.php?url=${encodeURIComponent(url)}`,
    );
    const data = response.data;
    return res.json({ success: true, data: data, author: "𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
  } catch (error) {
    res.json({ error: error });
  }
};
