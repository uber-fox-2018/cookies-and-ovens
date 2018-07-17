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

const Oven = require('./oven');
const {Cookie, ChocolateCake, NutCake, CheeseCake} = require('./cookie');

let oven = new Oven();
let keju = new CheeseCake();

oven.cook = keju;
oven.bake(55);
console.log(oven._cake);
// console.log(oven._cake._bakeTime);