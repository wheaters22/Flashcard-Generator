
var inquirer = require("inquirer");
var ClozeCard = require("./cloze.js");
var BasicCard = require("./basic.js");



function startGame() {

    inquirer.prompt([
        {
            type: "list",
            message: "Which type of flashcard game do you want to play?",
            choices: ["Basic Card", "Cloze Card"],
            name: "cardType"
        }, 
    ]).then(function(answer) {    
        function basicGame() {
    inquirer.prompt([
    {
        type: "list",
        message: 

    }
    ]).then(function (data) {});
};
        
    //]).then(function(answer) {

        var cardType = answer.cardType;
        console.log(cardType);

        if (cardType === "Basic Card") {
            inquirer.prompt([
            {
                type: "rawlist",
                message: "Who was the first president of the US?",
                name: "front"
            },
            {
                type: "rawlist",
                message: "George Washington",
                name: "back"
            }
        ]).then(function (cardData) {
                var cardObj = {
                    type: "BasicCard",
                    front: cardData.front,
                    back: card cardData.back
                };
            });
          }
        }); 


//     ]).then(function(answer) {
//         switch (answer.cardType) {
//             case "Basic":
//             console.log("Play Basic Flashcard Game");
//             BasicCard
//             break;

//             case "Cloze":
//             console.log("Play Cloze Flashcard Game")
//             ClozeCard
//             break;

//             default:
//                 console.log()
//         };
//     });
// };

startGame();




//var firstPresident = new BasicCard(
    //"Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
//console.log(firstPresident.front); 
/*
// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); */