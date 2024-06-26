
const { aio } = require('betabotz-tools')

exports.name = "/s4b1k/dl"; exports.index = async function (req, res, next) {
try {
let link = req.query.link;
if(!link) {
res.json({error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/dl?link=https://example.com\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)"})
return;
}

const response = await aio(link)
console.log(response) 
const title = response.result.title;
const video = response.result.medias[1].url;
res.json({url: video, title: title, creator: "𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)"})
} catch(error) {
res.json({error: "error fetching downloader api"})
console.log(error)
}
};
