// const path = require("path");
// const fullPath = path.join("/path", "to", "file.txt");
// console.log(fullPath);

// const path = require("path");
// const absolutePath = path.resolve("folder", "file.txt");
// console.log(absolutePath);
// The absolutePath will be something like '/your/current/working/directory/folder/file.txt'

// const path = require("path");
// const fileName = path.basename("/path/to/file.txt");
// console.log(fileName);
// fileName will be 'file.txt'

// const path = require("path");
// const directory = path.dirname("/path/to/file.txt");
// console.log(directory);
// directory will be '/path/to'

// const path = require("path");
// const normalizedPath = path.normalize("/path/to/../file.txt");
// console.log(normalizedPath);
// normalizedPath will be '/path/file.txt'

// const path = require("path");
// const platformSpecificPath = `folder${path.sep}file.txt`;
// console.log(platformSpecificPath);

const path = require("path");
const pathDelimiter = path.delimiter;
console.log(pathDelimiter);
// console.log(path);
