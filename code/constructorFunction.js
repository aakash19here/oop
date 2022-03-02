//Arrow functions cannot be used as they don't have this keyword
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    //Never do this (you should not create a method in a constructor function)
    // this.calcAge = function(){
    //     console.log(2022 - this.birthYear)
    // } 
    
}

const jonas = new Person('Jonas',1991)
const aakash = new Person('Aakash' ,2003)

console.log(aakash)
console.log(jonas)

//1. A new empty object is created 
//2. The function is called , this = {} (this keyword will point at the new object created in step 1)
//3. The newly created object is linked to a prototype 
//4. function automatically returns the empty object from the beginning

//All of this happens becoz we call the new operator in first-place 