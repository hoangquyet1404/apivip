exports.name = "/s4b1k/react";
exports.index = async function (req, res) {
  try {
    const react = req.query.q.toLowerCase();
    if (!react) {
      res.json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/react?q=${text}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });
    } else {
      if (
        react.includes("haha") ||
        react.includes("lol") ||
        react.includes("lmao") ||
        react.includes("abno") ||
        react.includes("kulang") ||
        react.includes("amp") ||
        react.includes("tang") ||
        react.includes("mamaw") ||
        react.includes("xd") ||
        react.includes("palamunin") ||
        react.includes("bobo") ||
        react.includes("self proclaimed") ||
        react.includes("attention seeker") ||
        react.includes("nigga")
      ) {
        res.json({ react: "😆" });
      } else if (
        react.includes("game") ||
        react.includes("cod") ||
        react.includes("valorant") ||
        react.includes("roblox") ||
        react.includes("minecraft") ||
        react.includes("ml")
      ) {
        res.json({ react: "🎮" });
      } else if (
        react.includes("openai") ||
        react.includes("ai") ||
        react.includes("artificial intelligence") ||
        react.includes("machine learning")
      ) {
        res.json({ react: "🤖" });
      } else if (
        react.includes("code") ||
        react.includes("coding") ||
        react.includes("programming") ||
        react.includes("developer") ||
        react.includes("software")
      ) {
        res.json({ react: "💻" });
      } else if (react.includes("morning")) {
        res.json({ react: "☀️" });
      } else if (react.includes("afternoon")) {
        res.json({ react: "🌤️" });
      } else if (react.includes("evening")) {
      } else if (
        react.includes("night") ||
        react.includes("nighty night") ||
        react.includes("sweet dreams")
      ) {
        res.json({ react: "💤" });
      } else if (
        react.includes("love") ||
        react.includes("puke") ||
        react.includes("romantic") ||
        react.includes("finger") ||
        react.includes("sarap") ||
        react.includes("crush")
      ) {
        res.json({ react: "😍" });
      } else if (react.includes("juice")) {
        res.json({ react: "🍹" });
      } else {
        res.json({ react: "❓" });
      }
    }
  } catch (error) {
    res.json({ error: "Error fetching autoreact" });
  }
};
