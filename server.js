const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.static('./api'));

app.listen(8080, function() {
  console.log("WE'RE UP AND RUNNING (IT DOWN MID)");
})