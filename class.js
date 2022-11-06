 class cars {
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
    }

    fullname() {
        return this.name+" "+ this.lastname
    }


}

class cars1 extends cars{
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
    }

    super(){

    }

}





let first = new cars1("hero","sharma");

console.log(first.fullname());