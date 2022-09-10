const prima = (angka) => {
    let result = "Bilangan Prima";
    for (let i = 2; i < angka; i++){
        if(angka%i==0){
            result = "Bukan Bilangan Prima"
            return result
        }
    }
    return result
}

console.log(`3 adalah ${prima(3)}`)
console.log(`7 adalah ${prima(7)}`)
console.log(`10 adalah ${prima(10)}`)