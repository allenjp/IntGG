var myInit = { method: 'GET',
               mode: 'cors'
             }

$(document).ready(function() {
    //var summoner_obj = getSummonerObj('jpallen');
    kickoff('SCIENCE HOMEWORK');
});

function kickoff(summonerName) {
    getSummonerObj(summonerName);
}
function getSummonerObj(summonerName) {
    var api_url = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "/recent?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7";
    
    fetch(api_url, myInit).then(function(data) {
        var summoner_obj = {
            "summoner_id": data.id,
            "summoner_name": data.name,
            "account_id": data.accountId
        }
        return data.accountId;
    });
}

function getMatchList(accountID) {
    var api_url = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountID + "/?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7"
    
    // TODO: Apply some form of rate-limiting here
    
    $.get(api_url, function(data) {
        
        var counter = 0;        
        $.each(data.matches, function(k, match) {
            setTimeout(getParticipantID(match.gameId, accountID), 1500);
        });
    });
}

function getParticipantID(gameID, accountID) {
    var api_url = "https://na1.api.riotgames.com/lol/match/v3/matches/" + gameID + "?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7";
    
    var participantID = 0;
    
    $.get(api_url, function (data) {
        
        if (data.participantIdentities[0].player.hasOwnProperty('accountId')) {
            $.each(data.participantIdentities, function(k, player) {
               if (player.player.currentAccountId == accountID) {
                   participantID = player.participantId;
               }
            });
            getMatchDetails(gameID, participantID);
        }
    });
}

function getMatchDetails(gameID, participantID) {
    
    var api_url = "https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/" + gameID + "?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7";
    
    var death_objs = [];
    
    $.get(api_url, function(data) {
        console.log(data);
        $.each(data.frames, function (k, frame) {
            $.each(frame.events, function (j, event) {
                if (event.type.toLowerCase() == "champion_kill" && event.victimId == participantID) {
                    var death_obj = {
                        "type": event.type,
                        "timestamp": event.timestamp,
                        "position": {
                            "x": event.position.x,
                            "y": event.position.y
                        },
                        "killerId": event.killerId,
                        "victimId": event.victimId
                    }
                    death_objs.push(death_obj);
                }
            })
        });
        
        // CHANGE THIS:
        // Make victim id == participant id of active user
        
        // also grab champion portrait based on champ id
        
        console.log(death_objs);
    });
    
}