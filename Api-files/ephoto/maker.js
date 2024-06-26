const { Maker } = require('imagemaker.js');
const path = require("path");
const fs = require("fs");
const axios = require("axios");

exports.name = '/s4b1k/maker';
exports.index = async (req, res) => {
    const html = req.query.q;
    const title = req.query.title;

    if (!html || !title) {
        res.json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/maker?q=https://ephoto360.com/hieu-ung-chu/viet-chu-bac-3d-online-273.html&title=SABIK\n\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
        return;
    }

    try {
        const maker = new Maker();
        const result = await maker.Ephoto360(html, [title]);
        const photo = result.imageUrl;

        const pathSave = path.join(__dirname, "cache", "ephoto.jpeg");

        const response = await axios.get(photo, { responseType: "stream" }); 

        response.data.pipe(fs.createWriteStream(pathSave)); 

        response.data.on('end', () => {
            res.sendFile(pathSave);
        });
    } catch (error) {
        console.error(error);
        res.sendFile(path.join(__dirname, "cache",
"error.jpg"));
    }
};