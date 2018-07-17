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
class Kue {
    constructor() {
        this.nama = '';
        this.menit_matang = 0;
        this.status = '';
    }

    _hasSugar(ingredients) {
        let result = false;
        ingredients.forEach(ing => {
            if (ing.name === 'sugar')
                result = true;
        });
        return result;
    }

    bake(menit) {
        if (menit < this.menit_matang - 5)
            this.status = 'mentah';
        else if (menit >= this.menit_matang - 5 && menit < this.menit_matang)
            this.status = 'hampir matang';
        else if (menit >= this.menit_matang && menit < this.menit_matang + 5)
            this.status = 'matang';
        else if (menit >= this.menit_matang + 5)
            this.status = 'hangus';
    }
}

class KueCoklat extends Kue {
    constructor() {
        super();
        this.nama = 'Kue coklat';
        this.menit_matang = 20;
    }
}

class KueKacang extends Kue {
    constructor() {
        super();
        this.nama = 'Kue kacang';
        this.menit_matang = 30;
    }
}

class KueKeju extends Kue {
    constructor() {
        super();
        this.nama = 'Kue keju';
        this.menit_matang = 35;
    }
}

class Oven {
    constructor() {
        this._baki = [];
        this._timer_in_minute = 0;
    }

    masukkanBaki(baki) {
        this._baki = baki;
    }

    setTimer(menit) {
        this._timer_in_minute = menit;
    }

    bake() {
        for(let min = 0; min <= this._timer_in_minute; min += 5) {
            console.log(`Menit ke ${min}:`);
            this._baki.forEach(item => {
                item.bake(min);
                console.log(`\t${item.nama},: ${item.status}`);
            });
        }
        console.log('Tiiing!');
    }
}

let kueCoklat = new KueCoklat();
let kueKacang = new KueKacang();
let kueKeju = new KueKeju();
let baki = [kueCoklat, kueKacang, kueKeju];

let oven = new Oven();
oven.masukkanBaki(baki);
oven.setTimer(40);
oven.bake();