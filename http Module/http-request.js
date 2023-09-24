const http = require("http");

const req = http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log("DATA IS:", chunk);
  }),
    res.on("end", () => {
      console.log("REQUEST ENDED");
    });
});

req.end();
