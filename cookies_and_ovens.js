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

class Cookie {
    constructor(name,cookingTime){
        this.name = name
        this.cooking_time = cookingTime
    }
}
  
class Oven {
    constructor(kue){
        this.kue = kue
    }

    cookCookie(){
        console.log(`Lets Cook ${this.kue.name}`);
        console.log(`----------------------------`);
        
        for (var i = 5; i <= this.kue.cooking_time+5; i+=5) {
            if (i < 15 && i >= 5) {
              console.log(`${this.kue.name}, menit ke ${i} : mentah`);
            }else if (i >= 15 && i < this.kue.cooking_time) {
              console.log(`${this.kue.name}, menit ke ${i} : hampir matang`);
            }else if (i === this.kue.cooking_time) {
              console.log(`${this.kue.name}, menit ke ${i} : matang`);
            }else if(i > this.kue.cooking_time){
              console.log(`${this.kue.name}, menit ke ${i} : hangus`);
            }
          }
    }
}

let kueCokelat = new Cookie('Kue Cokelat',20)
let kueKacang = new Cookie('kue Kacang',30)
let kueKeju = new Cookie('Kue Keju', 35)

let cookCokelat = new Oven(kueCokelat)
let cookKacang = new Oven(kueKacang)
let cookKeju = new Oven(kueKeju)

cookCokelat.cookCookie()
cookKacang.cookCookie()
cookKeju.cookCookie()



