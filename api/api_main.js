$(document).ready(function() {
    var summoner_obj = getSummonerObj('jpallen');
});

function getSummonerObj(summonerName) {
    var api_url = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7";
    
    $.get(api_url, function(data) {
        var summoner_obj = {
            "summoner_id": data.id,
            "summoner_name": data.name,
            "account_id": data.accountId
        }
        
        getMatchList(data.accountId)
        
    });
}

function getMatchList(accountID) {
    var api_url = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountID + "/recent?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7"
    
    var matchIDList = [];
    
    $.get(api_url, function(data) {
        console.log(data);
    });
}