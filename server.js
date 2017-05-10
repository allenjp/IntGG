const express = require('express');
const app = express();

app.use(express.static('./src/views'));

app.listen(8080, function() {
  console.log("WERE UP AND RUNNING (IT DOWN MID)");
})