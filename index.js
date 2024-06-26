const express = require("express");
const router = require("./s4b1k");
const config = require("./config.json");
global.config = config;
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const app = express();
app.use(express.json());

app.use(router);

const port = config.port;

app.get("/", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Home/home.html"));
});

app.get("/s4b1k/docs", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Home/docs.html"));
});

app.get("/s4b1k", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Home/s4b1k.html"));
});

app.get("/s4b1k/token/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/token/get.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});
app.get("/s4b1k/stalk/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/docs-page/stalk.html"));
  } catch (error) {
    return res.json({ error: "router not found" });
  }
});

app.get("/s4b1k/appstate/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Appstate/Appstate.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/sim/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/SimSimi/sim.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/pinterest/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/pinterest/pinterest.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/teach/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/SimSimi/teach.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/stalk/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/docs-page/stalk.html"));
  } catch (error) {
    return res.json({ error: "router not found" });
  }
});

app.get("/s4b1k/stalk-web/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Stalk/Stalk-Web.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/shoti/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/docs-page/shoti.html"));
});

app.get("/s4b1k/tempmail/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Tempmail/Temp.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/tikdl/html", async function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/TikTok/tikdown.html"));
  } catch (error) {
    return res.json({ error: "no router not found" });
  }
});

app.get("/s4b1k/pastebin/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/pastebin/paste.html"));
});

app.get("/s4b1k/chatgpt/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/chatgpt/gpt.html"));
});

app.get("*", async function (req, res) {
  res.sendFile(path.join(__dirname, "S4B1K-WEBLIST/Home/404.html"));
});

app.listen(port, () => {
  console.log(chalk.hex('#ffcc00')(`Your app is listening on port ${port}`));
});