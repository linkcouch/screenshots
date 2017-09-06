let lib = require('../index');

lib.s3Screenshots.takeScreenshot('2376ece0-9268-11e7-a9f3-956befc0cc8c', 'test', 'http://www.google.com')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log(err);
    });