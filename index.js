var Word = require("./word.js");
var inquirer = require("inquirer");
// index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
var arrOfWords = ["test", "testtest", "testtesttest", "testtesttesttest"]
// Randomly selects a word and uses the `Word` constructor to store it
var randomWord = Math.floor(Math.random() * arrOfWords.length);
var newWord = new Word(arrOfWords[randomWord]);

//Variable to keep track of the guesses remaing
var guesses = 10;

//Starting the game
getGuess();
//Function to run the game using node
function getGuess(){
    //To intially display the underscores of the unguesses word
    if(guesses == 10){
        console.log(newWord.returnString());
    }
    //Showing the user how many guesses they have remaining
    console.log("====== Guesses Remaining " + guesses + " ======");
    //If the user hasn't ran out of guesses
    if (guesses > 0) {
        //Node inquirer and prompt
        inquirer.prompt([
            {
                //Asking for input from the user that will be their guess
                type: 'input',
                message: 'Guess a letter: ',
                name: 'guess',
            }
        ]).then(function (inquirerResponse) {
            //Lowering guesses
            guesses--;
            //To check if the entire word has been guesses yet
            var guessed = false;
            //Updating the underscores to show the guesses letters and to change the
            // value of each letter to true if they have been guessed
            console.log(newWord.checkLetter(inquirerResponse.guess));
            //For each loop to check each element of the word to check if they have been guessed
            for (key in newWord.letterArray) {
                if (newWord.letterArray[key].guessed) {
                    guessed = true;
                } else {
                    //If any of the letters haven't been guessed break the loop and move on to the
                    // next guess
                    guessed = false;
                    break;
                }
            }
            //If the entire word hasn't been guessed yet
            if (!guessed) {
                getGuess();
            } else {
                //Congratulate the user that they guessed the word
                console.log("Congrats you guessed the word!");
            }
        });
    }else{
        //Notify the user that the game is over because they ran out of guesses
        console.log("Sorry you ran out of guesses");
    }
    
}