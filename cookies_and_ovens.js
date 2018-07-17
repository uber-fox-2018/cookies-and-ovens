// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cake {
    constructor(num, name) {
        this.bakedTime = num
        this.name = name
    }

    cook(time) {
        for (let i = 0; i < time; i+=5) {
            if (i < this.bakedTime - 5) {
                console.log(`${this.name}, menit ke ${i}: mentah`)
            } else if (i === this.bakedTime - 5) {
                console.log(`${this.name}, menit ke ${i}: hampir matang`)
            } else if (i === this.bakedTime) {
                console.log(`${this.name}, menit ke ${i}: matang`)
            } else {
                console.log(`${this.name}, menit ke ${i}: hangus`)
            }
        }
    }
}

class Cokelat extends Cake {
    constructor() {
        super(20, 'Kue cokelat')
    }
}

class Kacang extends Cake {
    constructor() {
        super(30, 'Kue Kacang')
    }
}

class Keju extends Cake {
    constructor() {
        super(35, 'Kue Keju')
    }
}

var cokelat = new Cokelat()
var kacang = new Kacang()
var keju = new Keju()

cokelat.cook(20)


