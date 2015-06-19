var fs = require("fs");
var path = require("path");
var _ = require("underscore");

var datasets = [
  require(path.join(__dirname, "data/cjk_base.json")),
  require(path.join(__dirname, "data/korean_base.json")),
  require(path.join(__dirname, "data/ksx1001.json")),
  require(path.join(__dirname, "data/mearie.json")),
  require(path.join(__dirname, "data/japanese_base.json")),
  require(path.join(__dirname, "data/joyokanji.json"))
];

console.log("Merging " + datasets.length + " datasets");

var codepoints = _.pluck(datasets, "codepoints");
codepoints = _.flatten(codepoints);
console.log("Before merge : " + codepoints.length + " characters");

codepoints = _.uniq(codepoints).sort();
console.log("After  merge : " + codepoints.length + " characters");

fs.writeFileSync(
  path.join(__dirname, "../codepoint/kj.json"),
  JSON.stringify({ codepoints: codepoints }),
  { encoding: "utf8" }
);

var characters = codepoints.map(function(ch) {
  return String.fromCharCode(ch);
}).join("").match(/.{1,32}/g).join("\n");

fs.writeFileSync(
  path.join(__dirname, "../codepoint/kj.txt"),
  characters,
  { encoding: "utf8" }
);
