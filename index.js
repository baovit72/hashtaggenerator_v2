const axios = require("axios");
const utils = require("./utils");
var WordPOS = require("wordpos"),
  wordpos = new WordPOS();
async function run() {
  const tags = await utils.readCsv("tag.csv");
  const titles = await utils.readCsv("title.csv");
}

run();
