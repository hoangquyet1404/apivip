const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();

exports.name = "/s4b1k/spam/ngl";
exports.index = async function (req, res) {
  try {
    const username = req.query.username;
    const message = req.query.message;
    const countParam = req.query.count;

    if (!username || !message || !countParam) {
      return res
        .status(400)
        .json({
          error:
            "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/spam/ngl?username=${ngl_username}&message=${text}&count=${send_amount}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)",
        });
    }

    const count = parseInt(countParam);

    const headers = {
      referer: `https://ngl.link/${username}`,
      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    };

    const data = {
      username: username,
      question: message,
      deviceId: uuid,
      gameSlug: "",
      referrer: "",
    };

    let sentCount = 0,
      c = 0;
    const interval = setInterval(async () => {
      if (sentCount >= count) {
        clearInterval(interval);
        return;
      }
      c += 1;
      try {
        await axios.post("https://ngl.link/api/submit", data, { headers });
        console.log(
          `[ NGL SPAM ] ${c}: Message sent successfully to ${username}`,
        );
        res.json({
          message: `[ NGL SPAM ] ${c}: Message sent successfully to ${username}`,
        });
      } catch (e) {
        console.log("Error:", e.message);
      }
      sentCount++;
    }, 1000);
  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
