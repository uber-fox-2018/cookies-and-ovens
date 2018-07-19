class Cookie {
    constructor(name, longBaked, bakedStatus) {
        this.name = name
        this.longBaked = longBaked
        this.bakedStatus = bakedStatus
    }
    bakedStatusOnOven(num) { 
        if (num >= this.longBaked + 5) {
            this.bakedStatus = `hangus`
        } else if (num === this.longBaked) {
            this.bakedStatus = `matang`
        } else if (num <= this.longBaked - 10) {
            this.bakedStatus = `mentah`
        } else if (num <= this.longBaked - 5) {
            this.bakedStatus = `hampir matang`
        } 
    }
}

class Oven {
    constructor() {
        this.cakes = []
        this.timer = 0
    }
    putCookie(obj,amount) {
        for (let i = 0; i < amount; i++) {
            this.cakes.push(obj)
        }
    }
    bakeCookie(times) {
        for (let j = 0; j < times; j++) {
            this.timer += 5
            for (let i = 0; i < this.cakes.length; i++) {
                this.cakes[i].bakedStatusOnOven(this.timer)
                console.log(`Kue ${this.cakes[i].name}, menit ke ${this.timer} : ${this.cakes[i].bakedStatus}`)    
            }
        }
    }
}

const peanutCookie = new Cookie(`peanut cookie`, 30, `mentah`)
const chocolateCookie = new Cookie(`chocolate cookie`, 20, `mentah`)
const cheseeCookie = new Cookie(`chesee cookie`, 35, `mentah`)

const oven = new Oven()

oven.putCookie(peanutCookie,1)
console.log(oven.cakes)
oven.bakeCookie(6)