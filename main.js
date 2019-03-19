// PART 1
// function sayHello(name){
//     console.log(`Hi, ${name}!`)
// }
var sayHello = name => console.log(`Hi, ${name}!`)
sayHello('Omar')

var getOlder = (age) => console.log(age + 50)
getOlder(45)


// // PART 2

const multiply = (num1, num2) => console.log(num1 * num2); 
multiply(5,2)

const subtractFive = num => {const diff = num -  5
	console.log(diff);
}
subtractFive(29)

const printName = name => console.log(name)

printName('Omar')

// // PART 3
// person.sayHello("Anoud") //should return Hi, Anoud!

// person.getOlder(12) //should return 62 

module.exports = {
     sayHello: sayHello,
     getOlder: getOlder
}