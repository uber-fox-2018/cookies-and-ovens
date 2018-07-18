const Cookie = require('./Cookie.js');

class ChocolateCake extends Cookie {
    constructor() {
        super();
        this._bakeTime = 20;
    }
}

module.exports = ChocolateCake;