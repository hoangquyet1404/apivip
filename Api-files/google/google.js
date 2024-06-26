const axios = require("axios");

exports.name = '/s4b1k/google'; exports.index =  async (req, res) => {
    const q = req.query.search;
    if (!q) {
        return res.status(400).json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/google/search?search=your_query\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
    }

    const myHeaders = {
        'apikey': '9alo4KELNeoXwFG1mGUnKTa7NDkj32P0'
    };

    try {
        const response = await axios.get(`https://api.apilayer.com/google_search?q=${encodeURIComponent(q)}`, {
            headers: myHeaders
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
};