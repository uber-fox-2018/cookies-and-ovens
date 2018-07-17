class Cookies {
  constructor(name, time) {
    this.name = name
    this.time = time
  }
}

class Coklat extends Cookies {
  constructor() {
    super('Kue Coklat', 20)
  }
}

class Kacang extends Cookies {
  constructor() {
    super('Kue Kacang', 30)
  }
}

class Keju extends Cookies {
  constructor() {
    super('Kue Keju', 35)
  }
}

module.exports = {Coklat, Kacang, Keju}