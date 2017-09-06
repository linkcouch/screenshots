let lib = require('../index');

lib.screenshots.saveImageToFile('eaa586a0-9268-11e7-b402-836f225556ff', 'http://www.el-davo.com', './test.png')
    .then(() => {
        console.log('Image saved to file');
    })
    .catch((err) => {
        console.log(err);
    });