const { spotify, spotifydl, facebook } = require('betabotz-tools');

exports.name = "/s4b1k/spotify/search"; 
exports.index = async (req, res) => {
    try {
        const title = req.query.title;
        if (!title) {
            return res.status(400).json({ error: '𝙼𝚒𝚜𝚜𝚒𝚗𝚐 𝚝𝚒𝚝𝚕𝚎 𝚘𝚏 𝚜𝚘𝚗𝚐.»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/spotify/search?title=${song_title}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)' });
        }

        const resultTitle = await spotify(title);

        if (!resultTitle || !resultTitle.result || resultTitle.result.data.length === 0) {
            return res.status(404).json({ error: '𝚂𝚘𝚗𝚐 𝚗𝚘𝚝 𝚏𝚘𝚞𝚗𝚍.' });
        }

        const songUrl = resultTitle.result.data[0].url;

        const downloadResult = await spotifydl(songUrl);
        res.json({ downloadUrl: downloadResult });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '𝚂𝙴𝚁𝚅𝙴𝚁 𝙸𝚂 𝙴𝚁𝚁𝙾𝚁.' });
    }
};