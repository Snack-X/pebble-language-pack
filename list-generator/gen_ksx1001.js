var fs = require("fs");
var path = require("path");
var dump = require("./_dump");

////////////////////////////////////////////////////////////////////////////////

var inFile = path.join(__dirname, "data_raw/ksx1001.txt");
var content = fs.readFileSync(inFile, { encoding: "utf8" });
var data = [];

var chars = content.split("");

for(var i = 0 ; i < chars.length ; i++) {
  var ch = chars[i];

  data.push([ch.charCodeAt(0), ch]);
}

dump(data, "data/ksx1001.json", "data/ksx1001.txt");
