const EventEmitter = require("events");

const celebrity = new EventEmitter();

// With one argument in emit
celebrity.on("race win", () => {
  console.log("Congratulations! You are GOAT");
});

celebrity.on("race win", () => {
  console.log("Boo I could have done better than that");
});

// console.log(celebrity);

celebrity.emit("race win");
celebrity.removeListener("race win");

// celebrity.removeAllListeners("race win");
console.log(celebrity);
// celebrity.emit("race lost", celebrit);
// celebrity.emit("race win");

// With Two Arguments
// celebrity.on("race", (data) => {
//   if (data == "win") {
//     console.log("Congratulations! You are GOAT");
//   }
// });
// celebrity.on("race", (data) => {
//   if (data == "win") {
//     console.log("Boo I could have done better than that");
//   }
// });

// celebrity.emit("race", "win");
