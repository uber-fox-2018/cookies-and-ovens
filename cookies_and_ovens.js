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
    constructor(time, name) {
      this.name= name
      this.cookingTime= time
      this.status= 'mentah'
    }
  }
  
  class Chocolate extends Cake {
    constructor(){
      super(20,'cokelat')
    }
  }
  class Peanut extends Cake {
    constructor(){
      super(30,'kacang')
    }
  }
  class Cheese extends Cake {
    constructor(){
      super(25,'keju')
    }
  }
  
  class Oven {
    constructor (){
      this.arrCake = []
    }
    insertCake(cake){
      this.arrCake.push(cake)
    }
    bake(bakeTime){
      for (var time= 0; time <= bakeTime; time+=5) {
        for (var i= 0; i < this.arrCake.length; i++) {
          if (this.arrCake[i].cookingTime === time) {
            this.arrCake[i].status = 'matang'
          } else if (this.arrCake[i].cookingTime-5 === time) {
            this.arrCake[i].status = 'hampir matang'
          } else if (this.arrCake[i].cookingTime-5 > time) {
            this.arrCake[i].status = 'mentah'
          } else {
            this.arrCake[i].status = 'hangus'
          }
          console.log(`Menit ${time}, kue ${this.arrCake[i].name}: ${this.arrCake[i].status}`)
        }
        console.log('======================================')
      }
    }
  }
  
  //Execute//
  let oven = new Oven()
 
  let chocolate = new Chocolate()
  oven.insertCake(chocolate)
  let peanut = new Peanut()
  oven.insertCake(peanut)
  let cheese = new Cheese()
  oven.insertCake(cheese)
  
  oven.bake(30) 
