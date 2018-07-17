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

function sleep(milliseconds) {

    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

class ChocolateCookie {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class PeanutCookie {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class CheeseCookie {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class Oven {
    static start(cookie, Bakingtime) {

        let status = ['raw', 'half baked', 'perfect', 'overcooked']

        for (let i = 5; i <= Bakingtime; i += 5) {

            if (i < cookie.time - 5) {

                console.log(`${cookie.name} menit ke ${i} : ${status[0]}`)

            } else if (i == cookie.time - 5) {

                console.log(`${cookie.name} menit ke ${i} : ${status[1]}`)

            } else if (i == cookie.time) {
                console.log(`${cookie.name} menit ke ${i} : ${status[2]}`)

            } else {
                console.log(`${cookie.name} menit ke ${i} : ${status[3]}`)

            }
            sleep(1000)
        }
    }
}

let chocolateCookie = new ChocolateCookie('ChocoCookies', 20);
let cheeseCookie = new CheeseCookie('CheeseCookies', 30);
let peanutCookie = new PeanutCookie('PeanutCookies', 35);

console.log(`***********|Cooking Start}***********`);
console.log(`----------*|Choco Cookies|*----------`);
Oven.start(chocolateCookie, 20);
console.log(`----------*|Cheese Cookies|*----------`);
Oven.start(cheeseCookie, 30);
console.log(`----------*|Peanut Cookies|*----------`);
Oven.start(peanutCookie, 35);
Oven.start();
console.log(`***********|Cooking Finish}***********`);
