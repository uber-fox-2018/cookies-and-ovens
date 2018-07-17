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
'use strict'
const sleep = require('sleep')
class Kue {
    constructor(name, time) {
        this.name = name,
        this.time = time,
        this.status = null
    }
}

class KueCoklat extends Kue {
    constructor() {
        super('Kue Coklat', 20)
    }
}

class KueKacang extends Kue {
    constructor() {
        super('Kue Kacang', 30)
    }
}

class KueKeju extends Kue {
    constructor() {
        super('Kue Keju', 35)
    }
}

class Oven {
    constructor(time) {
        this.time = time
    }
    cookingCake(cake) {
        let status = cake.status
        let time = this.time
        // console.log(cake.time);
        
        for(let i = 0; i <= time; i+=5) {
            if(i >= 5 && i <= cake.time - 10) {
                status = 'mentah'
                console.log(`${cake.name}, menit ke ${i} : ${status}`);
            } else if(i === cake.time-5) {
                status = 'hampir matang'
                console.log(`${cake.name}, menit ke ${i} : ${status}`);
            } else if(i === cake.time) {
                status = 'matang'
                console.log(`${cake.name}, menit ke ${i} : ${status}`);
            } else if(i > cake.time){
                status = 'gosong'
                console.log(`${cake.name}, menit ke ${i} : ${status}`);
            }
            sleep.sleep(1)
            console.clear()
        }
    }
}

let kueCoklat = new KueCoklat()
// console.log(kueCoklat);
let kuekacang = new KueKacang()
let kuekeju = new KueKeju()
let oven = new Oven(40) // this set timer oven for cooking Cake
// oven.cookingCake(kueCoklat)
// oven.cookingCake(kuekacang)
oven.cookingCake(kuekeju)
