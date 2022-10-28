//The apply() method is similar to the call() method

//The Difference Between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.


// INCASE OF APPLY

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));


  //INCASE OF BIND
  { // { is used for const coz same name (person) so that it will not throw an error

  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.call(person1, "Oslo", "Norway"));


}