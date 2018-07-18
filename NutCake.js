const Cookie = require('./Cookie.js');

class NutCake extends Cookie {
    constructor() {
        super();
        this._bakeTime = 30;
    }
}

module.exports = NutCake;