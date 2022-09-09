class user { //Harusnya pascalCase 'User'
    // constructor(id, username, password){
    //     this.id = id;
    //     this.username = username;
    //     this.password = password;
    // }
    var id;         // pendedklarasian variable melalui constructor seperti diatas
    var username;   // pendedklarasian variable melalui constructor seperti diatas
    var password;   // pendedklarasian variable melalui constructor seperti diatas
}

class userservice { //Harusnya pascalCase 'UserService'
    user[] users = []; // user[] tidak dapat dikenali js, sehingga dihapus saja
    
    user[] getallusers() { // user[] tidak dapat dikenali js, sehingga dihapus saja
        return users // kurang this. sebelum menggunakan variable di scop class
    }

    user getuserbyid(userid){ // 
        return users.filter(userid) // kurang this. sebelum menggunakan variable di scop class, callback seharusnya diisi (user) => user === userId
    }
}