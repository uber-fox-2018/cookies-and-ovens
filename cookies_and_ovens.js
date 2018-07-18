class cookie {
    constructor(name){
        this.status = 'mentah'
        this.TimeCooking = 0
        this.CookieName = name
        this.TryTime = 0
    }
}

class KueCoklat extends cookie {
    constructor(name){
        super()
        this.CookieName = name
        this.TimeCooking = 20
        
    }
}

class KueKeju extends cookie {
    constructor(name){
        super()
        this.CookieName = name
        this.TimeCooking = 35
        
    }
}

class KueKacang extends cookie {
    constructor(name,time){
        super()
        this.CookieName = name
        this.TimeCooking = 30
        
    }
}

class Oven {
    constructor(){
        this._cookies = []
    }
    
    cookieInput (input,time){
        if(input == 'kue kacang'){
            let kue_kacang = new KueKacang(input)
            this._cookies.push(kue_kacang)
        }
        else if(input == 'kue coklat'){
            let kue_coklat = new KueCoklat(input)
            this._cookies.push(kue_coklat)
        }
        else if(input == 'kue keju'){
            let kue_keju = new KueKeju(input)
            this._cookies.push(kue_keju)
        }
    }

    bake (){
        this._cookies.forEach(element => {
            element.TryTime += 5
            if(element.TryTime == element.TimeCooking){
                
                element.status = 'matang'
                
            }
            else if(element.TryTime < element.TimeCooking){
                
                element.status = 'belum matang'
                
            }
            else if(element.TryTime > element.TimeCooking){
                
                element.status = 'gosong'
                
            }
        })
    }

    showCookies(){
        this._cookies.forEach(result =>{
            console.log(result.CookieName + ', ' + 'menit ke ' + result.TryTime + ':' +result.status)
        })
    }
}

let oven = new Oven()
oven.cookieInput('kue kacang', 30)
oven.cookieInput('kue coklat', 30)
oven.cookieInput('kue keju', 30)

for (let i=0 ; i <= 40 ; i+= 5){
console.log('##proses oven##')
oven.bake()
oven.showCookies()
console.log('\n')
}


