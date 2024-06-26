  const axios = require('axios');

  exports.name = '/s4b1k/nude';
  exports.index = async (req, res, next) => {
    let god = ["100071575183469"];
    if (!god.includes(req.query.uid)) {
      res.json({ error: "You are not S4B1K!" });
      return; 
    }


    const q = ["pussy", "boobs", "ass"];
    const type = q[Math.floor(Math.random() * q.length)];

    const options = {
      method: 'GET',
      url: 'https://girls-nude-image.p.rapidapi.com/',
      params: { type: type },
      headers: {
        'X-RapidAPI-Key': 'ec4a07939fmsh4daed89d45e8bccp165f71jsn06c493b781a9',
        'X-RapidAPI-Host': 'girls-nude-image.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };