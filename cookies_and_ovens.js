const Cake = require('./cake.js')
class PeanutButter extends Cake{
    constructor(nama,lamaMasak){
        super('Peanut Butter', 20)
    }
}
class ChocolateChip extends Cake{
    constructor(nama,lamaMasak){
        super('Chocolate Chip', 15)
    }
}
class ChocolateCheese extends Cake{
    constructor(nama,lamaMasak){
        super('Chocolate Cheese', 15)
    }

}
class Oven {
    constructor(){
        this.listKue = []
    }
    bake(){
        for(let i = 0 ; i < this.listKue.length ; i++){
            for(let j = 5 ; j < this.listKue[i].lamaMasak+10 ; j+=5){
                if(j === this.listKue[i].lamaMasak){
                    console.log(this.listKue[i].name + ' menit ke '+j+' : Matang')
                }else if(j <= this.listKue[i].lamaMasak-10){
                    console.log(this.listKue[i].name + ' menit ke '+j+' : Mentah')
                }else if(j <= this.listKue[i].lamaMasak-5){
                    console.log(this.listKue[i].name + ' menit ke '+j+' : Hampir matang')
                }else{
                    console.log(this.listKue[i].name + ' menit ke '+j+' : Hangus')
                }
            }
        }
    }
}

var cake = new Cake
var peanut = new PeanutButter
var chocolateChip = new ChocolateChip
var chocolateCheese = new ChocolateCheese
var oven = new Oven
oven.listKue.push(peanut)
oven.listKue.push(chocolateChip)
oven.listKue.push(chocolateCheese)
console.log(oven.bake())