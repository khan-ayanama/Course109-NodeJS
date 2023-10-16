// First Program of Node with user Input

const mission = process.argv[2];

if (mission == "learn") {
  console.log("Time to Start writing some Node code!!");
} else {
  console.log(`Is ${mission} really a fun!!`);
}
