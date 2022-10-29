


let obj = {
    name : "ram",
    surname : "sharma",
    fullname : function (city, profession){
            console.log(this.name + " " +this.surname + "  is from  " + city + '  and is a  ' + profession + ' by profession')
    }
}

let obj2 = {
    name:"shyam",
    surname:"sharma",
}

let func=obj.fullname.bind(obj2);
console.log(func)

setTimeout(func,300,"rameshawr","parameshwar1")