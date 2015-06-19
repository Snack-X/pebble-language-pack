/**
 * Original Dataset
 *   http://j.mearie.org/post/24348147729/hangeul-usage-in-irc-chatting
 * Author
 *   Seonghoon Kang (http://mearie.org/)
 */

var fs = require("fs");
var path = require("path");
var dump = require("./_dump");
var threshold = 0.999;

////////////////////////////////////////////////////////////////////////////////

var inFile = path.join(__dirname, "data_raw/mearie.txt");
var content = fs.readFileSync(inFile, { encoding: "utf8" });
var data = [];

var lines = content.split("\n");

for(var i = 0 ; i < lines.length ; i++) {
  var line = lines[i];
  var arr = line.split(/ +/);
  arr.unshift(arr[0].charCodeAt(0));
  data.push(arr);
}

// limit
console.log("Limiting to " + (threshold * 100) + "%");
var totalCount = data[data.length - 1][3];
var limit = totalCount * threshold;

data = data.filter(function(d) {
  return d[3] < limit;
});

dump(data, "data/mearie.json", "data/mearie.txt");
