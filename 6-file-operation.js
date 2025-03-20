const { readFile } = require("fs");

console.log("application is started");

readFile("content/test.txt", "utf-8", (err, result) => {
  console.log(result);
  return;
});

console.log("application come to end of the file");
