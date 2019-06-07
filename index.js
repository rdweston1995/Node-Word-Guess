var Word = require("./word.js");
var inquirer = require("inquirer");
// index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
var arrOfWords = ["test", "testtest", "testtesttest", "testtesttesttest"]
// Randomly selects a word and uses the `Word` constructor to store it
var randomWord = Math.floor(Math.random() * arrOfWords.length);
var newWord = new Word(arrOfWords[randomWord]);

console.log(newWord.returnString());
//  Prompts the user for each guess and keeps track of the user's remaining guesses

var guesses = 10;
var guessed = false;

getGuess();
function getGuess(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter: ',
            name: 'guess',
        }
    ]).then(function(inquirerResponse){
        var guessed = false;
        console.log(newWord.checkLetter(inquirerResponse.guess));
        for(key in newWord.letterArray){
            //console.log(newWord.letterArray[key].guessed);
            if(newWord.letterArray[key].guessed){
                //console.log(newWord.letterArray[key].guessed);
                guessed = true;
            }else{
                //console.log(newWord.letterArray[key].guessed);
                guessed = false;
                break;
            }
        }
        if(!guessed){
            getGuess();
        }else{
            console.log("Congrats you guessed the word!");
        }
    });
}