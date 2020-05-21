const dieRolls = []
const rollButton = document.querySelector(".dice-roll")
const input = document.querySelector("input")
const diceSumDiv = document.querySelector("#dice-sum")
const showRollsButton = document.querySelector(".show-rolls")
const orderedList = document.querySelector("ol")
rollButton.addEventListener("click", function () {
    console.log("button click");
    const numberOfDice = input.value
    console.log(numberOfDice);
    let rollValues = 0
    let counter = 1
    while (counter <= numberOfDice) {
        const randomNumber = 1 + Math.floor(Math.random() * 6)
        dieRolls.push(randomNumber);
        counter += 1
        console.log(numberOfDice);
        rollValues += randomNumber;
        console.log("roll value ", rollValues);
    }
    diceSumDiv.innerHTML = rollValues;
    console.log(dieRolls);
    console.log(rollValues);
})
showRollsButton.addEventListener("click", function () {
    for (let counter = 0; counter < dieRolls.length; counter++) {
        let currentValue = dieRolls[counter]
        console.log(currentValue)
        const newDiceString = '<li class="dice">' + currentValue + "</li>";
        orderedList.innerHTML += newDiceString;

    }
})
