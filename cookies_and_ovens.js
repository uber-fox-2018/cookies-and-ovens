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
    constructor(name, cakeBaked) {
        this.name = name
        this.cakeBaked = cakeBaked
    }
}

class Chocholate extends Cake {
    constructor(name, cakeBaked) {
        super(name, cakeBaked)
    }
}

class Peanut extends Cake {
  constructor(name, cakeBaked) {
      super(name, cakeBaked)
  }
}

class Cheese extends Cake {
  constructor(name, cakeBaked) {
      super(name, cakeBaked)
  }
}


class Oven {
    constructor(cake) {
        this.cake = cake
    }


    cooking(){
        for (var i = 5; i <= this.cake.cakeBaked+5; i+=5) {
            if (i < 15 ) {
              console.log(`${this.cake.name}, menit ke ${i} : mentah`);
            }else if (i >= 15 && i !== this.cake.cakeBaked) {
              console.log(`${this.cake.name}, menit ke ${i} : hampir matang`);
            }else if (i === this.cake.cakeBaked) {
              console.log(`${this.cake.name}, menit ke ${i} : matang`);
            }else if(i > this.cake.cakeBaked){
              console.log(`${this.cake.name}, menit ke ${i} : hangus`);
            }
        }
    }
}

let cokelat = new Chocholate("Kue Cokelat", 25)
let cookingCokelat = new Oven(cokelat)
console.log("----Memasak Kue Cokelat----")
cookingCokelat.cooking()

let kacang = new Peanut("Kue Kacang", 30)
let cookingKacang = new Oven(kacang)
console.log("----Memasak Kue Kacang----")
cookingKacang.cooking()

let keju = new Cheese("Kue Keju", 35)
let cookingKeju = new Oven(keju)
console.log("----Memasak Kue Keju----")
cookingKeju.cooking()

