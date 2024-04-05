//Object-Items
let person = {
    name : "Sneha",
    age : 19,
    country : "India"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

//if-else
let age = 50

if(age < 6){
    console.log("Free")
}else if(age <= 17){
    console.log("Child Discount!")
}else if(age <= 26){
    console.log("Student Discount!")
}else if(age <= 66){
    console.log("Full price")
}else{
    console.log("Senior Citizen Discount!")
}

//Arrary and for loop
let largeContries = ["China", "India", "USA", "Indonesia", "Pakistan"]
console.log("The 5 largest contries in the world:")
for(let i = 0; i < largeContries.length; i++){
    console.log("- " +largeContries[i] )
}

//random function for stone paper scissor
let hands = ["rock","paper","scissor"]

function randomHands() {
    let hand = Math.floor(Math.random()*3)
    return hands[hand]
}

console.log(randomHands())