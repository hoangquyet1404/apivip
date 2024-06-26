const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");

exports.name = '/s4b1k/tempmail/message'; exports.index = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: '»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/tempmail/message?email=${your_temporary_email}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)' });
    }

    const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email.split('@')[0]}&domain=${email.split('@')[1]}`);
    const messages = response.data;

    if (!messages || messages.length === 0) {
      return res.status(404).json({ error: 'No messages found for the provided email address' });
    }

    const formattedMessages = [];

    for (const message of messages) {
      const messageId = message.id;
      const messageResponse = await axios.get(`https://www.1secmail.com/api/v1/?action=readMessage&login=${email.split('@')[0]}&domain=${email.split('@')[1]}&id=${messageId}`);

      const $ = cheerio.load(messageResponse.data.body);
      const plainTextMessage = $.text();

      const formattedMessage = {
        sender: message.from,
        subject: message.subject,
        message: plainTextMessage
      };

      formattedMessages.push(formattedMessage);
    }

    res.json({ messages: formattedMessages });


    
  } catch (error) {
    console.error('Error getting messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};