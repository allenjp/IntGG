var fetch = require('node-fetch');

exports.getSummonerInfo = function (req, res) {
    
    var summonerName = req.params.summonername;
    var apiKey = "3a0fbaee-bea5-48fe-bcc6-0581cf9407e7";
    var accountID = 0;
    
    console.log('summoner name: ' + summonerName);
    
    var summoner_url = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "/?api_key=" + apiKey;
    
    fetch(summoner_url)
        .then(function(summ_json) {
            return summ_json.json();
        
        }).then(function(data) {
            var summoner_obj = {
                "summoner_id": data.id,
                "summoner_name": data.name,
                "account_id": data.accountId
            }
            accountID = data.accountId;
            return accountID;
        
        }).then(function(account_id) {
            console.log('account id: ' + account_id);
            var matchListUrl = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + account_id + "/recent?api_key=" + apiKey

            fetch(matchListUrl)
                .then(function(ml_json) {
                    return ml_json.json();
                }).then(function(matchListData) {
                    console.log(matchListData);
                
                    var matchCount = matchListData.matches.length;
                
                    var batchNum = Math.ceil(matchCount / 10);
                    
                    console.log('count: ' + matchCount);
                    console.log('batches: ' + batchNum);
                    var matchIDBatchList = [];
                    var matchIDBatch = [];
                    
                    
                    for (var j = 0; j < matchCount; j++) {
                        
                        var matchID = matchListData.matches[j].gameId;
                        matchIDBatch.push(matchID);
                        
                        if (matchIDBatch.length > 9) {
                            matchIDBatchList.push(matchIDBatch);
                            matchIDBatch = [];
                        }
                    }
                
                    var deathObjList = [];
                
                    //for (var i = 0; i < matchIDBatchList.length; i++) {
                        //for (var j = 0; j < matchIDBatchList[i].length; j++) {
                            //var matchID = matchIDBatchList[i][j];
                            
                            var matchID = matchIDBatchList[0][0];

                            var participantUrl = "https://na1.api.riotgames.com/lol/match/v3/matches/" + matchID + "?api_key=" + apiKey;           
                            
                            fetch(participantUrl)
                                .then(function(partipant_json) {
                                    return partipant_json.json();
                                }).then(function(participant_data) {
                                    var participantID = -1;
                                    if (participant_data.participantIdentities[0].player.hasOwnProperty('accountId')) {
                                        
                                        for (var i = 0; i < participant_data.participantIdentities.length; i++) {
                                            var participantFound = false;
                                            if (participant_data.participantIdentities[i].player.currentAccountId == accountID) {
                                                participantID = participant_data.participantIdentities[i].participantId;
                                                
                                                participantFound = true;
                                            }
                                            if (participantFound) {
                                                break;
                                            }
                                        }
                                        console.log('participant id: ' + participantID);

                                        var timeLineUrl = "https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/" + matchID + "?api_key=3a0fbaee-bea5-48fe-bcc6-0581cf9407e7";
                                        
                                        fetch(timeLineUrl)
                                            .then(function(timeline_json) {
                                                return timeline_json.json();
                                            }).then(function(timeline_data) {
                                            
                                                for (var i = 0; i < timeline_data.frames.length; i++) {
                                                    
                                                    for (var j = 0; j < timeline_data.frames[i].events.length; j++) {
                                                        
                                                        var event = timeline_data.frames[i].events[j];
                                                        
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
                                                            deathObjList.push(death_obj);
                                                        }
                                                    }
                                                }
                                                console.log(JSON.stringify(deathObjList));
                                                res.send(JSON.stringify(deathObjList));
                                            });
                                    }
                                });
                        //}
                    //}
                });
            });
};

function processBatch()