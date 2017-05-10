module.exports = function(app) {
    var api = require('../controllers/apiController');

    app.route('/test/:summonername')
        .get(api.getSummonerInfo)
};