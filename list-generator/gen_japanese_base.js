var fs = require("fs");
var path = require("path");
var dump = require("./_dump");

////////////////////////////////////////////////////////////////////////////////

var inFile = path.join(__dirname, "data_raw/japanese_base.txt");
var content = fs.readFileSync(inFile, { encoding: "utf8" });
var data = [];

var chars = content.split("\n").filter(function(l) { return l[0] !== "#"; }).join("");

for(var i = 0 ; i < chars.length ; i++) {
  var ch = chars[i];

  data.push([ch.charCodeAt(0), ch]);
}

dump(data, "data/japanese_base.json", "data/japanese_base.txt");
