let request = require('../common/request');
let {s3Screenshot} = require('../common/urls');

class S3Screenshots {

    takeScreenshot(token, s3Name, url) {
        return request.get(s3Screenshot, {token, s3Name, url});
    }
}

module.exports = new S3Screenshots();