module.exports = function(app) {
    var api = require('../controllers/apiController');

    app.route('/getinfo/:summonername')
        .get(api.getSummonerInfo)
};