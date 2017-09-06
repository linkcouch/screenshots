let {writeFile} = require('fs');
let request = require('../common/request');
let {screenshotUrl} = require('../common/urls');

class Screenshots {

    getImage(token, url) {
        return request.get(screenshotUrl, {token, url});
    }

    saveImageToFile(token, url, fileLocation) {
        return request.get(screenshotUrl, {token, url})
            .then((response) => {
                return new Promise((resolve, reject) => {

                    if (response.statusCode !== 200) {
                        return reject('Invalid response from server');
                    }

                    writeFile(fileLocation, response.body, 'binary', err => {
                        err ? reject(err) : resolve();
                    });
                });
            })
    }
}

module.exports = new Screenshots();