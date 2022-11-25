// let count  = 5
// count = count +1
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints+ 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints -75
// console.log(bonusPoints)
// bonusPoints = bonusPoints +45

// console.log(bonusPoints)
let countEl = document.getElementById("count-el")
console.log(countEl)
let count =0

 function increment() {
    count = count +1 
    countEl.innerText = count
    //console.log("The button was clicked")
   
 }
 let saveEl = document.getElementById("save-el")

 function save() {
   saveEl.textContent += count
   saveEl.textContent += " - "
   count = 0
   countEl.textContent = 0
 }
// let name = "Shubham"
// let greeting = "Hi , my name is "
// let myGreeting = greeting + name
// let welcomeEl = document.getElementById("welcome-el")
// welcomeEl.innerText = myGreeting
// welcomeEl.innerText += "😎"