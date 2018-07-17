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


class Kue{
    constructor(status){
        this.status = status
    }
}


class Kue_Kacang extends Kue{
    constructor(status){
        super(status)
        this.waktu = 20
    }
}


class Kue_Coklat extends Kue{
    constructor(status){
        super(status)
        this.waktu = 30
    }
}

class Kue_Keju extends Kue{
    constructor(status){
        super(status)
        this.waktu = 35
    }
}

class Oven{
    constructor(timer){
        this.timer = timer
    }

    masakKue(kue){
        var menit = 0
        
        while(menit < this.timer){
            menit += 5
            if(menit < kue.waktu-5 ){
                kue.status = 'mentah'
                console.log(`menit ke ${menit} : ${kue.status}`);
            }else if(menit < kue.waktu){
                kue.status = 'hampir matang'
                console.log(`menit ke ${menit} : ${kue.status}`);
            }else if(menit === kue.waktu){
                kue.status = 'matang'
                console.log(`menit ke ${menit} : ${kue.status}`);
            }else if(menit > kue.waktu){
                kue.status = 'gosong'
                console.log(`menit ke ${menit} : ${kue.status}`);
            }

            sleep()
        }
    }
}



function sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {var obj = {
    }
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

var masak = new Oven(30)
// console.log(masak.lamaMasak);
var kueCoklat = new Kue_Coklat()
// console.log(kueCoklat);

masak.masakKue(kueCoklat)


