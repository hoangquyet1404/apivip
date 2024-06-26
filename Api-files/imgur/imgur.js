const request = require('request');

exports.name = "/s4b1k/imgur"; 
exports.index = async (req, res, next) => {
  var link = req.query.link;

  if (!link) return res.json({ error: "missing image query" });

  var options = {
    method: "POST",
    url: "https://api.imgur.com/3/image",
    headers: {
      Authorization: "Client-ID fc9369e9aea767c",
    },
    formData: {
      image: link,
    },
  };

  request(options, function (error, response) {
    if (error) return res.json({ error: "It's an error later" });

    var upload = JSON.parse(response.body);

    res.json({ uploaded: { status: "success", image: upload.data.link } });
  });
};