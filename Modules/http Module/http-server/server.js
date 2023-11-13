const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: Request ${req.url}`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("<h1>Home Page</h1>");
        break;
      case "/about":
        res.end("<h2>Hello, I'm Ayan Khan</h2>");
        break;
      default:
        res.end("404: Page Not Found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started Successfully!!");
});
