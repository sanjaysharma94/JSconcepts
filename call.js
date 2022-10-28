//The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object

parent = {
   fullname : function(city, country){
    return this.firstname + " " + this.lastname  + "," + city + "," + country;;
   } 
}

child = {
    firstname:"ram",
    lastname:"raghuvanshi",
}

console.log(parent.fullname.call(child, 'indore', 'India'));