const axios = require("axios");

exports.name = "/s4b1k/appstate"; exports.index = async function (req, res) {
  try {
const {email, password} = req.query;
if(!email || !password) {
return res.json({"»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/appstate?email=email&password=password": "Invalid query\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)"})
}

const response = await axios.get(`https://fbstate-getter.vercel.app/api?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
const data = response.data;

res.json({result: data});
} catch (error) {
res.json({error: error.message });
console.log(error);
}
};