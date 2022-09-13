const lampu = (angka) => {
    let kondisiLampu = false;
    for(let i = 1; i <=angka;i ++){
        if(angka % i == 0){
            kondisiLampu = !kondisiLampu;
        }
    }
    let result = kondisiLampu ? "Lampu Menyala" : "Lampu Mati";
    return result;
}

console.log(`5 => ${lampu(5)}`)
console.log(`4 => ${lampu(4)}`)