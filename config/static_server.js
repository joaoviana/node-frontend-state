var express = require('express');
var app = express();

app.listen(3000, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Started app at port 3000');
  }
});

module.exports = app;
