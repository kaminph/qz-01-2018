var quiz = {};

// ---------------------------------------------------------------------
// 1.001 QUIZ 2018
//
// All quiz questions are in this file. If you would like to run
// your code there is a separate file, run.js(), which you can use
// and manipulate to your liking. The quiz is open book and open web.
// Feel free to google for answers as you would in the real world.
// Good luck!
// ---------------------------------------------------------------------

// ----------------------------------------
//   SECTION 01 - BASICS
// ----------------------------------------

quiz.question_00 = function() {
  // ----------------------------------------
  //   QUESTION 00
  //   Is "counter" a global variable?
  //   Return true or false.
  // ----------------------------------------
  var counter = 0;

  //it's a local variable inside this function
  return false;
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return 'Hi!';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  return [{},{},{}];
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  return [{name:'Kamin', age:27},{name:'Mook', age:28}];
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------

  //**** */
  return {question1:foo, question2:bar};
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------


  someObject.age = 12

  return someObject;
};

// ----------------------------------------
//   SECTION 02 - OBJECTS
// ----------------------------------------

quiz.question_06 = function(data, carName, model, doors, color) {
  // ---------------------------------------------------------------
  // Find the price of the car whose name, model, and doors are provided
  // as arguments to this function.
  // Return the price.
  // ---------------------------------------------------------------

  var carPrice = 0;
  // TODO your code here


  if(carName == 'Nissan'){
    for(var i = 0; i< data.cars.Nissan.length; i++){
      if(data.cars.Nissan[i].model == model && data.cars.Nissan[i].doors == doors && data.cars.Nissan[i].color != null){
        for(var j = 0; j < data.cars.Nissan[i].color.length; j++){
          if(data.cars.Nissan[i].color[j].id == color){
            carPrice = data.cars.Nissan[i].color[j].carPrice;
            //console.log('found the car');
          }
        }
      }
    }
  }

  if(carName == 'Ford'){
    for(var i = 0; i< data.cars.Ford.length; i++){
      if(data.cars.Ford[i].model == model && data.cars.Ford[i].doors == doors && data.cars.Ford[i].color != null){
        for(var j = 0; j < data.cars.Ford[i].color.length; j++){
          if(data.cars.Ford[i].color[j].id == color){
            carPrice = data.cars.Ford[i].color[j].carPrice;
            //console.log('found the car');
          }
        }
      }
    }
  }

  if(carName == 'BMW'){
    for(var i = 0; i< data.cars.BMW.length; i++){
      if(data.cars.BMW[i].model == model && data.cars.BMW[i].doors == doors && data.cars.BMW[i].color != null){
        for(var j = 0; j < data.cars.BMW[i].color.length; j++){
          if(data.cars.BMW[i].color[j].id == color){
            carPrice = data.cars.BMW[i].color[j].price;
            //console.log('found the car!');
          }
        }
      }
    }
  }

//   var carData= {
//     "cars": {
//         "Nissan": [
//             {"model":"Sentra", "doors":4, "price": 17000},
//             {"model":"Maxima", "doors":4,  "price": 18000},
//             {"model":"GTR", "doors":2,  "price": 210000},
//             {"model":"Altima", "doors":2,  "price": 23300},
//             {"model":"LEAF", "doors":2,  "price": 29900},
//             {"model":"Maxima", "doors":2,  "price": 33270},
//             {"model":"Versa", "doors":2,  "price": 12110},
//             {"model":"Juke", "doors":2,  "price": 20900}
//         ],
//         "Ford": [
//             {"model":"Taurus", "doors":4, "price": 21000},
//             {"model":"Escort", "doors":4,  "price": 22000},
//             {"model":"Expedition", "doors":4,  "price": 64447},
//             {"model":"Fusion", "doors":4,  "price": 24000},
//             {"model":"Fiesta ", "doors":4,  "price": 13995},
//             {"model":"EcoSport ", "doors":4,  "price": 20995},
//             {"model":"Edge ", "doors":4,  "price": 30215},
//             {"model":"Explorer ", "doors":4,  "price": 32985}
//         ],

//         "BMW": [
//             {"model":"series 3", "doors":4, 
//                 "color":[ 
//                 {"id":"red", "price": 35000 },
//                 {"id":"silver", "price": 40000 }]
//             }
//         ]
//     }
// };

  return carPrice;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------



  var maxPricedCar = {};
  // TODO your code here


  data.keys(obj).forEach(function(key) {

    console.log(key, obj[key]);
  
  });



  console.log(data.cars[1]);
  for(var i = 0; i < data.cars.size; i++){
    console.log(data.cars.Nissan);
  }

  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------

  // TODO your code here

  var newCar = {model: "Civic", doors: 4, price: 18840}
  data.cars.Honda.push(newCar);
  return data;
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------

quiz.question_09 = function(input) {
  // ---------------------------------------------------------------
  // We are provided ski racer results from the olympics.
  // The input is an array of skier objects with name and time properties.
  // Using forEach, return an object whose keys are skier names and values
  // are associated skier times. You can assume each skier as a unique name.
  //
  // Example input: [{ name: 'Bob', time: 45.00 }]
  // Example output: { 'Bob': 45.00 }
  // ---------------------------------------------------------------

  var obj = {};
  input.forEach(function(/* TODO args */) {
    // TODO your code here
    // add name as key, time as value


  });
  return obj;
};

quiz.question_10 = function(input) {
  // ---------------------------------------------------------------
  // The input is an array of skier objects with name and time properties.
  // However, we are only interested in names of skiers with a time less than 48.5.
  // Using filter, map, and the provided input, return an array of skier names whose
  // times are under 48.5.
  //
  // Example input: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // Example output: ['Bob']
  // ---------------------------------------------------------------

  var res = input
    .filter(function(value, index) {
      return input[index].time < 48.5;
    })
    .map(function(value, index) {
      return input[index].name;
    });
  return res;
};

quiz.question_11 = function(input) {
  // ---------------------------------------------------------------
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  //
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  // ---------------------------------------------------------------

  var res = input.reduce(
    function(previous, current, currentIndex) {
      return previous + ", " + current;
    },
    "",
  );
  return res;
};

quiz.question_12 = function(input) {
  // ---------------------------------------------------------------
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  //
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------

  var compare = function(/* TODO args */) {
    // TODO your code here
  };
  return input.sort(compare);
};

module.exports = quiz;
