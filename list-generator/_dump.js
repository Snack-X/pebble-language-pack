var fs = require("fs");
var path = require("path");

module.exports = function(data, jsonFile, txtFile) {
  var output = data.sort(function(d1, d2) {
    return d1[0] - d2[0];
  });

  console.log("This dataset has " + output.length + " characters");

  var codepoints = output.map(function(d) { return d[0]; });
  var characters = output.map(function(d) { return d[1]; });

  var json = JSON.stringify({ codepoints: codepoints });
  var txt = characters.join("").match(/.{1,32}/g).join("\n");

  var jsonPath = path.join(__dirname, jsonFile);
  fs.writeFileSync(jsonPath, json, { encoding: "utf8" });

  var txtPath = path.join(__dirname, txtFile);
  fs.writeFileSync(txtPath, txt, { encoding: "utf8" });
};
