# Path Module part - 01

The path module is a core module that provides utilities for working with file and directory paths. It helps you manipulate file paths in a platform-independent way, handling the differences between Windows and Unix-like operating systems.

Here are some common functions and methods provided by the path module:

`path.join([...paths]):` This method joins path segments together using the appropriate separator for the current operating system. For example:

```js
    const path = require('path');
    const fullPath = path.join('/path', 'to', 'file.txt');
    // On Unix-like systems, fullPath will be '/path/to/file.txt'
```

`path.resolve([...paths]):` This method resolves an absolute path by processing a sequence of paths or path segments. It returns the absolute path for the current working directory. For example:

```js
    const path = require('path');
    const absolutePath = path.resolve('folder', 'file.txt');
    // The absolutePath will be something like '/your/current/working/directory/folder/file.txt'
```

`path.basename(path[, ext]):` Returns the last portion of a path. You can also specify an optional file extension to remove. For example:

```js
    const path = require('path');
    const fileName = path.basename('/path/to/file.txt');
    // fileName will be 'file.txt'
```

`path.dirname(path):` Returns the directory name of a path. For example:

```js
    const path = require('path');
    const directory = path.dirname('/path/to/file.txt');
    // directory will be '/path/to'
```

`path.extname(path):` Returns the file extension of a path. For example:

```js
    const path = require('path');
    const extension = path.extname('/path/to/file.txt');
    // extension will be '.txt'
```

`path.normalize(path):` Normalizes a path, resolving any '..' and '.' segments. For example:

```js
    const path = require('path');
    const normalizedPath = path.normalize('/path/to/../file.txt');
    // normalizedPath will be '/path/file.txt'
```

These are some of the key functions and methods provided by the path module in Node.js. It's a handy module when working with file and directory paths in a cross-platform manner.
