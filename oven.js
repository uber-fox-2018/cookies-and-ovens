const chalk = require('chalk')
const sleep = require('sleep')

class Oven {
  constructor(jenisKue) {
    this.cake = jenisKue
  }

  baking(times_baking) {
    const timeBaking = times_baking
    const myCake = this.cake
    
    for (let i = 0; i <= timeBaking; i+=5) {
      if (i === myCake.time) {
        console.log(chalk.green(`${myCake.name} menit ke - ${i} : Kue sudah matang`))
      } else if (i === myCake.time - 5) {
        console.log(chalk.yellow(`${myCake.name} menit ke - ${i} : Kue setengah matang`))
      } else if (i > myCake.time) {
        console.log(chalk.red(`${myCake.name} menit ke - ${i} : Kue gosong`))
      } else {
        console.log(chalk.gray(`${myCake.name} menit ke - ${i} : Kue belum matang`))
      }
      sleep.sleep(1)
    }
  }

}

module.exports = Oven