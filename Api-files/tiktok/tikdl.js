const axios = require("axios");

exports.name = "/s4b1k/tikdl";
exports.index = async function (req, res, next) {
  let url = req.query.link;
  if (!url) {
    return res.json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/tikdl?link=${video-url}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
  }

  try {
    const response = await axios.get(`${global.config.tiktok}/api/?url=${url}`);

    const username = response.data.data.author.unique_id;
    const nickname = response.data.data.author.nickname;
    const title = response.data.data.title;
    const duration = response.data.data.duration;
    const heart = response.data.data.digg_count;
    const comment = response.data.data.comment_count;
    const share = response.data.data.share_count;
    const videoUrl = response.data.data.play;
const images = response.data.data.images;

    return res.json({
      code: "200",
      msg: "success",
      data: {
        url: videoUrl,
        username: username,
        nickname: nickname,
        title: title,
        duration: duration,
        heart: heart,
        comment: comment,
        share: share,
        images: images,
        developer: "𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)",
      }
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Error fetching tikvm api" });
  }
};