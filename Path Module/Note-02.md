# Path Module part - 02

Node.js also provides some useful properties and constants. Here are a few of them:

`path.sep:` This property holds the platform-specific path segment separator (\ on Windows and / on Unix-like systems). You can use it to concatenate paths while ensuring compatibility with the current operating system.

```js
    const path = require('path');
    const platformSpecificPath = `folder${path.sep}file.txt`;
```

`path.delimiter:` This property holds the platform-specific path delimiter used in the PATH environment variable (; on Windows and : on Unix-like systems). You can use it when dealing with environment variables related to paths.

```js
    const path = require('path');
    const pathDelimiter = path.delimiter;
```
