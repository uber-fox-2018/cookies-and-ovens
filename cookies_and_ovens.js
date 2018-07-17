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

class Kue{
    constructor(name,time){
        this.name = name
        this.time = time
    }
}

class KueKacang extends Kue{
    constructor(name,time){
        super(name,time)
    }
}

class KueCoklat extends Kue{
    constructor(name,time){
        super(name,time)
    }
}

class KueKeju extends Kue{
    constructor(name,time){
        super(name,time)
    }
}

class Oven{
    constructor(cook){
        this.cook = cook
        this.loyang = []
    }

    bake(time){
        let startTime = 5
        for(let i = 0; i<time; i+=5){
            if(i<this.cook.time-5){
                console.log(`${this.cook.name}, menit ke ${i}: mentah`)
            }else if(i === this.cook.time-5){
                console.log(`${this.cook.name}, menit ke ${i}: hampir`)
            }else if(i === this.cook.time){
                console.log(`${this.cook.name}, menit ke ${i}: matang`)
            }else{
                console.log(`${this.cook.name}, menit ke ${i}: hangus`)
            }

        }

    }
}

let chocolateCake = new KueCoklat('KueCoklat',20)
let cook = new Oven (chocolateCake)

cook.bake(30)
