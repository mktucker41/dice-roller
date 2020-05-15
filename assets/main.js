// Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)
// Push the result of each roll onto your dieRolls array. (2 points)
// Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)



const dieRolls = []
const rollButton = document.querySelector(".dice-roll")
const input = document.querySelector("input")
const diceSumDiv = document.querySelector("#dice-sum")
const showRollsButton = document.querySelector("#show-rolls")
const orderedList = document.querySelector("ol")
rollButton.addEventListener("click", function () {
    console.log("button click");
    const numberOfDice = input.value
    console.log(numberOfDice);
    let counter = 1
    while (counter <= numberOfDice) {
        const randomNumber = 1 + Math.floor(Math.random() * 6)
        dieRolls.push(randomNumber);
        counter += 1
        console.log(numberOfDice);
    }
    console.log(dieRolls);

})
