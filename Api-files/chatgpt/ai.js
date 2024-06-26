const axios = require("axios")

exports.name = "/s4b1k/ai"; exports.index = async function (req, res) {
const { ask } = req.query;
if(!ask) {
return res.json({error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/gemini?ask=your_question\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)"})
}

  
const googlekey = "sk-proj-eIbtGxFOQX5CnJPJ4k9xT3BlbkFJtsesLoTEFvquRdgWwSuj"
  try {
    const url =
      "https://api.openai.com/v1/chat/completions" +
      googlekey;
    const headers = {
      "Content-Type": "routerlication/json",
    };
    const data = {
      contents: [
        {
          parts: [
            {
              text: ask,
            },
          ],
        },
      ],
    };

    const response = await axios.post(url, data, { headers });
  
    return res.json({code: "200", msg: "success", data: { gemini:  response.data.candidates[0].content.parts[0].text, model: "gemini-pro"} })
  } catch (e) {
    console.log(e.message);
    return res.json({error: e.message })
  }
};