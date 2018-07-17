const { Coklat, Kacang, Keju } = require('./cookies_and_ovens')
const Oven  = require('./oven')

const coklat = new Coklat()
const kacang = new Kacang()
const keju   = new Keju()

console.log('=========== Baking Kue Coklat ===========')
const ovenCoklat = new Oven(coklat)
ovenCoklat.baking(20)

console.log('=========== Baking Kue Kacang ===========')
const ovenKacang = new Oven(kacang)
ovenKacang.baking(30)

console.log('=========== Baking Kue Keju ===========')
const ovenKeju = new Oven(keju)
ovenKeju.baking(40)

