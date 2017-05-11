const express = require('express');
const app = express();

app.use(express.static('./client/public'));

var routes = require('./server/services/api/routes/apiRoutes');
routes(app);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("WERE UP AND RUNNING (IT DOWN MID)");
});