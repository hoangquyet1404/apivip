function convertToJejemon(text) {
    return text.replace(/[aeiouylw]/gi, function (vowel) {
        switch (vowel.toLowerCase()) {
            case 'a':
                return '4';
            case 'e':
                return '3';
            case 'i':
                return '1';
            case 'o':
                return '0';
            case 'u':
                return '2';
            case 'y':
                return '7';
            case 'l':
                return '8';
            case 'w':
                return '9';
            default:
                return vowel;
        }
    });
}

exports.name = '/s4b1k/jeje'; 
exports.index =  (req, res) => {
    try {
        const text = req.query.text;
        if (!text) {
            return res.status(400).json({ error: '»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/jeje?text=your text\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)' });
        }
        const jejemonizedText = convertToJejemon(text);
        res.json({ original: text, jejemon: jejemonizedText });
    } catch (error) {
        res.json({error: error});
    }
};