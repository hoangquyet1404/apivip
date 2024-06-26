const axios = require('axios');


exports.name = '/s4b1k/bible'; exports.index =  async (req, res) => {
  try {
    const response = await axios.get(`${global.config.bible}`);
    const verseText = response.data[0].text;
    res.json({ s4b1k: verseText });
  } catch (error) {
    console.error("Error fetching verse:", error);
    res.status(500).json({ error: "Failed to fetch verse" });
  }
};