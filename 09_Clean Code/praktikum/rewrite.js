class Kendaraan {
    constructor(){
        this.kecepatanPerJam = 0
    }
}

class Mobil extends Kendaraan {
    constructor(){
        super()
    }

    tambahKecepatan(kecepatanBaru){
        this.kecepatanPerJam += kecepatanBaru
    }

    berjalan(){
        this.tambahKecepatan(10)
    }

    getSpeed(){
        return this.kecepatanPerJam
    }
}

let mobilA = new Mobil()
let mobilB = new Mobil()

mobilA.berjalan()
mobilA.berjalan()
mobilA.berjalan()
mobilB.berjalan()
mobilB.berjalan()

console.log(`Mobile A dengan kecepatan ${mobilA.getSpeed()}`);
console.log(`Mobile B dengan kecepatan ${mobilB.getSpeed()}`);