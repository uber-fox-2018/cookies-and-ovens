class Cake {
    constructor(name, bakingTime) {
        this.name = name;
        this.bakingTime = bakingTime;
    }

}

class ChocCake extends Cake {
    constructor(name, bakingTime) {
        super('Chocolatey', 20);
    }
}

class PeanutCake extends Cake {
    constructor(name, bakingTime) {
        super('Go Nuts', 30);
    }
}

class CheeseCake extends Cake {
    constructor(name, bakingTime) {
        super('Cheesus', 35);
    }
}

class Oven {
    constructor(cakeList) {
        this.cakeList = cakeList;
    }

    bake(time) {
        for (let i = 0; i < this.cakeList.length; i++) {
            for (let j = 5; j < time; j+=5) {
                if (j === this.cakeList[i].bakingTime) {
                    console.log(`${this.cakeList[i].name}, menit ke ${j}: DONE! Let's eat cake!!!`);
                } else if (j === this.cakeList[i].bakingTime - 5) {
                    console.log(`${this.cakeList[i].name}, menit ke ${j}: almost done, almost!`);
                } else if (j > this.cakeList[i].bakingTime) {
                    console.log(`${this.cakeList[i].name}, menit ke ${j}: BURTNTTT!`);
                } else {
                    console.log(`${this.cakeList[i].name}, menit ke ${j}: not done yet, be patient.`);
                }
            }
        }
    }
}

let cake = new Cake();
let choco = new ChocCake();
let peanut = new PeanutCake();
let cheese = new CheeseCake();

let cakeList = [];
cakeList.push(choco);
cakeList.push(peanut);
cakeList.push(cheese);

let oven = new Oven(cakeList);

console.log(oven);
oven.bake(45);