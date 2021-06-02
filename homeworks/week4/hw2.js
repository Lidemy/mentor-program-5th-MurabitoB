const request = require('request');
const baseUrl = 'https://lidemy-book-store.herokuapp.com';
const args = process.argv;

if (args.length > 2) {

    switch (args[2]) {
        case 'list':
            request(baseUrl + '/books?_limit=100', function (error, response, body) {
            if (error) {
                return console.log(error);
            }
            const books = JSON.parse(body);
            for (let book of books) {
                console.log(`${book.id} ${book.name}`);
            }
            });
            break;
        case 'read':
            request(baseUrl + `/books/${args[3]}`, function (error, response, body) {
                if (error) {
                    return console.log(error);
                }
                const book = JSON.parse(body);
                console.log(book.name);
            });
            break;
        case 'delete':
            request.delete(baseUrl + `/books/${args[3]}`,function (error, response, body) {
                if (error) {
                    return console.log(error);
                }
            });
            break;
        case 'create':
            request.post(baseUrl + `/books`, function (error, response, body) {
                if (error) {
                    return console.log(error);
                }
            }).form({name:args[3]});
            break;
        case 'update':
            request.patch(baseUrl + `/books/${args[3]}`, function (error, response, body) {
                if (error) {
                    return console.log(error);
                }
            }).form({name:args[4]});
            break;
    }
}


