let lib = require('../index');

lib.screenshots.getImage('eaa586a0-9268-11e7-b402-836f225556ff', 'http://www.google.com')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log(err);
    });