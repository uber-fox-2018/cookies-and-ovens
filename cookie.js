class Cookie {
  constructor() {
    this._bakeTime = 10;
  }

  get bakeTime (){
    return this._bakeTime;
  }
}

class ChocolateCake extends Cookie {
  constructor() {
    super();
    this._bakeTime = 20;
  }
}

class NutCake extends Cookie {
  constructor() {
    super();
    this._bakeTime = 30;
  }
}

class CheeseCake extends Cookie {
  constructor() {
    super();
    this._bakeTime = 35;
  }
}


module.exports = {Cookie, ChocolateCake, NutCake, CheeseCake};