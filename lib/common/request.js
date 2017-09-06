let request = require('request');

class Request {

    get(url, qs) {
        return new Promise((resolve, reject) => {
            request.get(url, {qs, encoding: 'binary'}, (err, response) => {
                err ? reject(err) : resolve(response);
            });
        });
    }
}

module.exports = new Request();