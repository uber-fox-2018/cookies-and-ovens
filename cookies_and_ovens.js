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

const Oven = require('./Oven.js')
const CheeseCake = require('./CheeseCake.js')

let oven = new Oven()
let keju = new CheeseCake()
  
oven.cook = keju
oven.bake(45)
console.log(oven._cake)
console.log(oven._cake._bakeTime)