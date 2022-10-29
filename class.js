 class cars {
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
    }

    fullname() {
        return this.name+" "+ this.lastname
    }


}

class cars1 {
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
    }

    fullname1= function(city) {
        return this.name + " "+ this.lastname + " is from " + city
    }


}

let first = new cars("hero","sharma");

console.log(first.fullname());