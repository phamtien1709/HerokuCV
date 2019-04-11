const express = require('express');

const app = express();

app.use(express.static(__dirname + '/www'));

// const port = process.env.PORT || config.port;

app.listen(process.env.PORT || 8000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});