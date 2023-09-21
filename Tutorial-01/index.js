const mission = process.argv[2];
process.env.SEXY = "Zara Noor Abbas";
process.env.PORT = 3000;
console.log("PROCESS:", process);

if (mission === "learn") {
  console.log("Time to write some Node Code!");
} else {
  console.log(`Is ${mission} really more fun?`);
}
