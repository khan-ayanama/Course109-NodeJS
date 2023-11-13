# HTTP Module

## HTTP Request to google

```js
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
```

## HTTPs Request

```js
    const { get } = require("https");

    get("https://www.youtube.com", (res) => {
    res.on("data", (chunk) => {
        console.log("Data is: ", chunk);
    }),
        res.on("end", () => {
        console.log("Request is ended");
        });
    });
```

## Creating HTTP Server

```js
    const http = require("http");
    const fs = require("fs");

    const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: Request ${req.url}`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
        case "/":
            res.end("<h1>Home Page</h1>");
            break;
        case "/about":
            res.end("<h2>Hello, I'm Ayan Khan</h2>");
            break;
        default:
            res.end("404: Page Not Found");
        }
    });
    });

    myServer.listen(8000, () => {
    console.log("Server Started Successfully!!");
    });
```

## HTTP Methods

HTTP methods in Node.js with the popular Express.js framework. For these examples, make sure you have Express.js installed (npm install express).

`GET Method:`

```js
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
    res.send('Hello, World! This is a GET request.');
    });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
```

This sets up a simple Express server that responds with "Hello, World!" when you make a GET request to the root ("/") URL.

`POST Method:`

```js
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();

    app.use(bodyParser.json());

    app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
    });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
```

This example sets up a server that expects JSON data in the request body. When you make a POST request to "/api/data" with JSON data, it responds by acknowledging the receipt of the data.

`PUT Method:`

```js
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();

    app.use(bodyParser.json());

    app.put('/api/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    // Perform an update operation with the provided data
    res.json({ message: `Updated data with ID ${id}`, updatedData });
    });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
```

This sets up a server that listens for PUT requests to update data by ID. The ID is extracted from the URL, and the new data is provided in the request body.

`DELETE Method:`

```js
    const express = require('express');
    const app = express();

    app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    // Perform a delete operation with the provided ID
    res.json({ message: `Deleted data with ID ${id}` });
    });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
```

This sets up a server that listens for DELETE requests to delete data by ID. The ID is extracted from the URL.

These are basic examples, and in a real-world application, you would typically connect to a database or perform more complex operations based on the HTTP method and route. Express.js provides a powerful framework for building RESTful APIs and handling different HTTP methods.
