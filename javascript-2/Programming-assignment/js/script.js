function getUserData() {
    let userName = prompt("Enter your name: ")
    let age = parseFloat(prompt("Enter your age: "))
    return {userName, age}
}
function getMotto() {
    let motto = prompt("Enter your favorite phrase or motto: ")
    return motto
}
function getCount() {
    let number = parseFloat(prompt("Enter the number of times you`d like this phrase displayed to you: "))
    return number
}
function printMotto(motto, count, userData) {
    let times = 0; 
    for (let i = 0; i < count; i++) {
        console.log(`#${i + 1} - ${motto}`)
        times++; 
    }
    console.log(`Hi ${userData.userName}! Your motto has been displayed ${times} times`)
    console.log(`You are ${userData.age} years old and that is incredible!`)
}

let userData = getUserData()
let motto = getMotto()
let count = getCount()
printMotto(motto, count, userData)

