const request = require('request');
const baseUrl = 'https://lidemy-book-store.herokuapp.com';

request(baseUrl + '/books?_limit=10', function (error, response, body) {
    if (error) {
        return console.log('抓取失敗', err);
    }
    try {
        const books = JSON.parse(body);
        for (let book of books) {
            console.log(`${book.id} ${book.name}`);
        }
    }
    catch (e) {
        return console.log(e);
    }

});