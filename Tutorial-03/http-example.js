const http = require("http");
console.log(http.request());

// const req = http.request("http://www.google.com", (res) => {
//   res.on("data", (response) => {
//     console.log(`data from server: ${response}`);
//   });
//   res.on("end", () => {
//     console.log("Request ends here");
//   });
// });

// req.end();
