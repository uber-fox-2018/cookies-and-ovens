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
class Oven{
    constructor(time){
        this.time = time
        this.batch = []
    }

    bake(){
        let cookies = this.batch;
        for(let cookie of cookies){
            for(let i=0; i<this.time; i+=5){
                if(cookie.bakingTime > i && cookie.bakingTime <=14){
                    console.log(`${cookie.name} menit ke ${i} : mentah`);
                }else if(i === 15){
                    console.log(`${cookie.name} menit ke ${i} : hampir matang`);
                    cookie.status = "hampir matang"
                }else if (i=== cookie.bakingTime){
                    console.log(`${cookie.name} menit ke ${i} : matang`);
                    cookie.status = "matang"
                }else{
                    console.log(`${cookie.name} menit ke ${i} : hangus`);
                    cookie.status = "hangus"
                }
            }
        }
        
    }

}

class Cookie {
    constructor(name,bakingTime){
        this.name = name
        this.bakingTime = bakingTime
        this.status = "mentah"
    }
}

class PeanutButter extends Cookie {
    constructor(bakingTime){
        super("peanut butter", 20)
    }
}

class ChocholateChip extends Cookie {
    constructor(bakingTime){
        super("chocolate chips", 20)
    }
}

let chocholateChip = new ChocholateChip();
let peanutButter = new PeanutButter()
let oven = new Oven(30);
oven.batch.push(chocholateChip,peanutButter)
oven.bake();

/* asumsi kue cokelat butuh waktu matang selama 20menit 
Kue cokelat, menit ke 5 : mentah
Kue cokelat, menit ke 10 : mentah
Kue cokelat, menit ke 15 : hampir matang
Kue cokelat, menit ke 20 : matang
Kue cokelat, menit ke 25 : hangus

*/