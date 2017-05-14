module.exports = function(app) {
    var api = require('../controllers/apiController');

    app.route('/api/getdeathinfo/:summonername')
        .get(api.getSummonerInfo)
    
    app.route('/api/getmatchtimeline/:matchid/:accountid')
        .get(api.getmatchtimeline)
};