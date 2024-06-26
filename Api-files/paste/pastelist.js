const fs = require("fs");
const path = require("path");

exports.name = "/s4b1k/paste/list", exports.index = async function (req, res) {
try {
res.sendFile(path.join(__dirname, "data/paste.json"));
} catch (error) {
return res.json({error: "error reading list"})
}
};