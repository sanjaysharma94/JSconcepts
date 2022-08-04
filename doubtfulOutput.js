// const user = {
//     name: 'Raj',
//     location: {
//       city: 'NY',
//       state: 'NY'
//     }
//   };
// //   const copy = Object.assign({}, user);
//   // OR
//   const copy = { ...user};

// // ***** ALLL THESE TWO MAKES SHALLOW COPIES


// // const copy = user
//   copy.location.city = 'RamNagar';
//   console.log('original: ', user.location.city);
//   console.log('copy:', copy.location.city);




/************************************ */



var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
//   console.log(number);
};
display();
// answer is undefined due to hoisting
     