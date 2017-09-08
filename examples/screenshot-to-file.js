let lib = require('../index');

lib.screenshots.saveImageToFile('430acac0-94bd-11e7-bc46-cfbba3a33f04', 'http://www.el-davo.com', './test.png')
    .then(() => {
        console.log('Image saved to file');
    })
    .catch((err) => {
        console.log(err);
    });