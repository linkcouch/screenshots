let lib = require('../index');

lib.screenshots.getImage('430acac0-94bd-11e7-bc46-cfbba3a33f04', 'http://www.google.com')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log(err);
    });