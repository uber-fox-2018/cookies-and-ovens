const Cookie = require('./Cookie.js');

class CheeseCake extends Cookie {
    constructor() {
        super();
        this._bakeTime = 35;
    }
}

module.exports = CheeseCake;