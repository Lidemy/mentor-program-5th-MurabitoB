const request = require('request');
const baseUrl = 'https://api.twitch.tv/kraken';
const options = {
    headers:{
        Accept:'application/vnd.twitchtv.v5+json',
        'Client-ID':'lbsfoansnh2ogjqk1lpngltrsqrvj2'
    }
}


request(baseUrl + `/games/top`, options, function (error, response, body) {
    var games = JSON.parse(body).top;
    games.forEach(element => {
        console.log(`${element.viewers} ${element.game.name}`)
    });
});