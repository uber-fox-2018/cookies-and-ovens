class Oven {
  constructor() {
    this._cake = null;
  }

  set cook(cakeName) {
    return this._cake = cakeName
  }

  get cake (){
    return this._cake;
  }

  bake(time){
    let donenessLevel = ['raw', 'almost ready', 'ready','burnt']
    let bakeTime = this.cake.bakeTime

    for (let i = 0; i <= time; i += 5){
      console.log(`You've been baking for: ${i} minutes`)
      if (i >= 0 && i < bakeTime / 3){
        console.log(`Your cake is still ${donenessLevel[0]}`)
      }
      else if (i === bakeTime - 5){
        console.log(`Your cake is ${donenessLevel[1]}`)
      }
      else if (i === bakeTime){
        console.log(`Your cake is ${donenessLevel[2]}`)
      }
      else if (i > bakeTime) {
        console.log(`Your cake is ${donenessLevel[3]}!!!`)
      }

      console.log("--------------------------------------------------------")
      this.sleep(1500);
    }
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
}

module.exports = Oven;