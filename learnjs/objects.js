

// credentials=  {

//     username: "Admin",
//     password: "Admin123"
// }

// console.log(credentials.username )

// console.log(credentials['username'])

// console.log(credentials.password )

// userdetails ={

//     firstname : "Rajesh",
//     lastname: "M",
//     lastname: "xyz",
//     place : "Bangalore",
//     address: {

//           street: "",
//           pincode: 560073
//     }

// }

// userdetails.address['street'] = "Nandini layout" // Update the property value 

// console.log(userdetails.address.street)

// userdetails['Gender'] = "Male"  // add new property 


// console.log(userdetails)

// delete userdetails.firstname

// console.log(userdetails.firstname)

// console.log(userdetails.course)


// userdetails.address['city'] = "Bangalore"

// console.log(userdetails)

// console.log(userdetails['lastname'] )

// //console.log(userdetails)

// userdetails['firstname'] = "Raju"

//We use objects for Data driven too 
// 


jobtitles = {

    title1 : "SDET 123",
    title2 : "SDET 234",
    title3 : "SDET 456"
}


//for in  es6 

for(let value in jobtitles){

    console.log("Loop starts here ")
    console.log(jobtitles[value])
     console.log("Loop Ends here ")
}



const creds = {

   Username : "Admin",
   password : "admin123"
}

Object.freeze(creds);

creds['password'] = "Raju"

console.log(creds)

// Example
// const person = {
//   name: "Alice",
//   age: 25,

//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// person.greet(); // Hello, my name is Alice

// Here:

// name and age are properties.
// greet is a method.
// this.name refers to the name property of the current object.
// Common Built-in Object Methods
// 1. Object.keys()

// Returns an array of an object's property names.

// const user = {
//   name: "John",
//   age: 30
// };

// console.log(Object.keys(user));
// // ["name", "age"]
// 2. Object.values()

// Returns an array of an object's property values.

// console.log(Object.values(user));
// // ["John", 30]
// 3. Object.entries()

// Returns an array of key-value pairs.

// console.log(Object.entries(user));
// // [["name", "John"], ["age", 30]]
// 4. Object.assign()

// Copies properties from one or more objects into another object.

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const result = Object.assign({}, obj1, obj2);

// console.log(result);
// // { a: 1, b: 2 }
// 5. Object.freeze()

// Prevents changes to an object.

// const person = { name: "Alice" };

// Object.freeze(person);

// person.name = "Bob";

// console.log(person.name);
// // Alice
// 6. Object.seal()

// Prevents adding or deleting properties but allows modifying existing ones.

// const car = {
//   brand: "Toyota"
// };

// Object.seal(car);

// car.brand = "Honda"; // Allowed
// car.year = 2024;     // Not allowed

// console.log(car);
// // { brand: "Honda" }
// 7. Object.hasOwn()

// Checks whether an object has a specific property.

// const student = {
//   name: "Emma"
// };

// console.log(Object.hasOwn(student, "name"));
// // true