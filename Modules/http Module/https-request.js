const { get } = require("https");

get("https://www.youtube.com", (res) => {
  res.on("data", (chunk) => {
    console.log("Data is: ", chunk);
  }),
    res.on("end", () => {
      console.log("Request is ended");
    });
});
