
class Oven {
    
    constructor() {
        this._cake = null;
    }
  
    set cook(cakeName) {
      return this._cake = cakeName
    }
  
    bake(time) {
        let donenessLevel = ['raw', 'almost ready', 'ready','burnt']
        let bakeTime = this._cake._bakeTime
  
        for (let i = 0; i <= time; i += 5){
            console.log(`You've been baking for: ${i} minutes`)
            if (i >= 0 && i < bakeTime / 2) {
                console.log(`Your cake is still ${donenessLevel[0]}`)
            } else if (i === bakeTime - 5) {
                console.log(`Your cake is ${donenessLevel[1]}`)
            } else if (i === bakeTime) {
                 console.log(`Your cake is ${donenessLevel[2]}`)
            } else {
                console.log(`Your cake is ${donenessLevel[3]}!!!`)
            }

            console.log("\n")
        }
    }
}

module.exports = Oven