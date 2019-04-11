const express = require('express');

const app = express();

app.use(express.static(__dirname + '/www'));

// const port = process.env.PORT || config.port;

app.listen(8000, () => {
  console.log("Your server is online at " + 8000);
});