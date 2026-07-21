

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