const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.end("hi world")
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});