

// arr  = []  // empty array  - no elements present 


// arr2   = [1,4,7,8,2,6]  // homogenous array similar data type elements 


// arr3 = ["Raju", 33, "Chennai", undefined, null, {city: "Bangalore", pincode: 560073}]


// //index number starts from 0 
// console.log(arr3[5])

// //.length 

// console.log(arr.length)

// arr4 = [2,7,34,98,56,45, 67,43,5,6,98,234]

// console.log(arr4[arr4.length-1])

// console.log(arr4)

// const arr = ["admin", "admin123"]

// arr[1] = "Raju"

// console.log(arr)


// //25+ methods 

// // .sort()
// // .reverse()
// // .push()
// // .pop()
// // .shift()
// // .unshift()
// // .includes()
// // .slice()
// // .splice()
// // .find()
// // .indexOf()

// arr6 = ["madhu", "rajesh"]

// arr6.push("dibbanna")

// arr6.push("laxmikanth")

// arr6.push("srikanth", "cnuvas")

// //============================
// arr6.pop()
// arr6.pop()
// arr6.pop()
// console.log(arr6)

// arr7 = ["ashwini", "chethana"]

// arr7.unshift("tejaswini")

// arr7.unshift("Manjusri", "fousiya")



// //===============================
// arr7.shift()
// arr7.shift()


// console.log(arr7)

arr8 = [ 'Manjusri', 'fousiya', 'tejaswini', 'Manjusri','Ashwini', 'chethana' ]

// arr9 = arr8.sort()

// console.log(arr9)

arr10 = arr8.reverse()

console.log(arr10)

//Includes - true or false 

arr8 = [ 'Manjusri', 'fousiya', 'tejaswini', 'Manjusri','Ashwini', 'chethana' ]

console.log(arr8.includes("fousiya"))


menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]

console.log(menuitems)
 
str = "Madhu".split("")  // convert string to array 

str2 = "this is javascript class".split(" ")

console.log(str2)

arr = [ 'this', 'is', 'javascript', 'class' ].join("") // converts arry to string 

console.log(arr)


menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
].sort()

console.log(menuitems)

// 1 to 100 
// 3 - fizz 
//5 - buzz 
// 3and 5  fizzbuzz 
// otherwise print number 

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz 

for(let i=1; i<=100; i++){

    if( i%3 == 0 && i%5==0){

        console.log("fizzbuzz")
    }
    else if(i%3 == 0){
            console.log("fizz")
    }
     else if(i%5 == 0){
            console.log("buzz")
    }
    else{

           console.log(i)
    }
}

// revser the string 

// str = "Javascript"

// revstr = str.split("").reverse().join("")

// console.log(revstr)

str = "Raju"

revstr = str.split("").reverse().join("")

if(str == revstr){

    console.log("Given string is palindrome ")
}
else{
  console.log("Given string is not a palindrome ")

}

str1 = "raju"   
str2 = "army"  

str3 = str1.split("").sort().join("")

str4 =  str2.split("").sort().join("")

if(str3 == str4){

      console.log("Given strings are anagrams ")
}
else {
    
      console.log("Given strings are not an anagrams ")
}
