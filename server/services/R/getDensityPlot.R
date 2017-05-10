library(spatstat)
library(rjson)

match <- fromJSON(txt = "https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/2493824406?api_key=5dd2d08b-ba98-4108-a15f-68d55acbb6a6")


window <- as.owin(c(0, 15100, 0, 15100))
death.ppp <- ppp(json$x, json$y, window = window)
death.density <- density(death.ppp, bw = "bw.diggle")
plot(balt.density)