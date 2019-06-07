var letter = require("./letter.js");
//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word 
// the user is attempting to guess. That means the constructor should define:
//word = "test";
var Word = function(word){
    // An array of `new` Letter objects representing the letters of the underlying word
    var letterArr = [];
    for(key in word){
        var letters = new letter(word[key]);
        letterArr.push(letters)
    }
    this.letterArray = letterArr;
    //console.log(letterArr);
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) 
    // that displays the character or an underscore and concatenate those together.
    this.returnString = function(){
        var str = "";
        for(key in letterArr){
            str += letterArr[key].display();
        }
        return str;
    }
    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.checkLetter = function(chr){
        
        for(key in letterArr){
            if(letterArr[key].checkChar(chr)){
                letterArr[key].display();
            }
        }
        return this.returnString();
    }  
}

//var word = new Word("test");

module.exports = Word;
    