// Node Programs with (dot) files inside global object of node

global.name = "Ayan";
console.log(name);
console.log(global);

// process.env is an object and adding element into it
process.env.SEXY = "Zara Noor Abbas";
process.env.PORT = 3000;
console.log("PROCESS:", process);
