// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:


const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);

console.log(fullName())


// Preserving this
// Sometimes the bind() method has to be used to prevent loosing this.

// In the following example,
// the person object has a display method.
// In the display method, this refers to the person object:


//When a function is used as a callback, this is lost.
//This example will try to display the person name after 3 seconds,
// but it will display undefined instead:

const person1 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      
       console.log(this.firstName + " " + this.lastName);
    }
  }
  
  setTimeout(person1.display, 3000);


  //The bind() method solves this problem.

  //In the following example, 
  //the bind() method is used to bind person.display to person.

  const person2 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {

       console.log(this.firstName + " " + this.lastName);
    }
  }
  
  let display = person2.display.bind(person);
  setTimeout(display, 3000);