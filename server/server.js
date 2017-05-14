const express = require('express');
const app = express();
var RateLimit = require('express-rate-limit');

var apiLimiter = new RateLimit({
    windowMs: 60 * 1000, // 1 minute window
    delayAfter: 1,
    delayMs: 1 * 1000,
    max: 20
});

app.use(express.static('./client/public'));
app.use('/api/', apiLimiter);

var routes = require('../server/services/api/routes/apiRoutes');
routes(app);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("WE'RE UP AND RUNNING (IT DOWN MID)");
});