const request = require('request');
const baseUrl = 'https://restcountries.eu/rest/v2';

request(baseUrl + `/name/${process.argv[2]}`, function (error, response, body) {
    if (error) {
        return console.log('抓取失敗',error);
    }
    var countries = JSON.parse(body);
    if(countries.length)
        countries.forEach(country => {
            console.log('='.repeat(10));
            console.log(`國家：${country.name}`);
            console.log(`首都：${country.capital}`);
            console.log(`貨幣：${country.currencies[0].code}`)
            console.log(`國碼：${country.callingCodes[0]}`)
        });
    else
        console.log('找不到國家資訊');
});