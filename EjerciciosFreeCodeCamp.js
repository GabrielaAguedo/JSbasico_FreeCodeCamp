//EJERCICIO_1
// este es un comentario en linea.

        /*Este es un comentario
        de varias
        lineas */

//EJERCICIO_2
//Declare JavaScript Variables
        var myName;


//EJERCICIO_3
// Storing Values with the Assignment Operator
        var a;
        a = 7;


//EJERCICIO_4
//Assigning the Value of One Variable to Another

        var a;
        a = 7;
        var b;
        b = a;

//EJERCICIO_5
//Initializing Variables with the Assignment Operator
        var myVar = 0;
        var a = 9;


//EJERCICIO_6
//Declare String Variables
        var myFirstName = "Gabriela";
        var myLastName = "Aguedo";

//EJERCICIO_7
//Understanding Uninitialized Variables

        var a = 5;
        var b = 10;
        var c = "I am a";
        

        a = a + 1;
        b = b + 5;
        c = c + " String!";


//EJERCICIO_8
//Understanding Case Sensitivity in Variables
// Variable declarations
        var studlyCapVar = 10;
        var properCamelCase = "A String";
        var titleCaseOver;

        // Variable assignments
        studlyCapVar = 10;
        properCamelCase = "A String";
        titleCaseOver = 9000;


//EJERCICIO_9
//Explore differences between the var and let keywords
        let catName = "Oliver";
        let catSound = "Meow!";


//EJERCICIO_10
//Declare a read only variable with the const keyword
        const FCC = "freeCodeCamp";
        let fact = "is cool!";
        fact = "is awesome!";
        console.log(FCC, fact);


//EJERCICIO_11
//Add two numbers with javascript
        const sum = 10 + 10;


//EJERCICIO_12
//Subtract one number from another with javascript
        const difference = 45 - 33;


//EJERCICIO_13
//Multiply two numbers with javascript
        const product = 8 * 10;


//EJERCICIO_14
//Divide one number by another with javascript
        const quotient = 66 / 33;


//EJERCICIO_15
//Increment a number with javascript
        let myVar = 87;

        
        myVar++;


//EJERCICIO_16
//Decrement a number with javascript
        let myVar = 11;

        
        myVar--;


//EJERCICIO_17
//Dreate decimal numbers with javascript
        const ourDecimal = 5.7;
        let myDecimal = 3.8;
        


//EJERCICIO_18
//Multiply two decimals with javascript
        const product = 2.0 * 2.5;


//EJERCICIO_19
//Divide one decimal by another with javascript
        const quotient = 4.4 / 2.0;


//EJERCICIO_20
//Finding a remainder in javascript
        const remainder = 11 % 3;


//EJERCICIO_21
//Compound assignment with augmented addition
        let a = 3;
        let b = 17;
        let c = 12;

        a += 12;
        b += 9;
        c += 7;


//EJERCICIO_22
//Compound assignment with augmented subtraction
        let a = 11;
        let b = 9;
        let c = 3;

        a -= 6;
        b -= 15;
        c -= 1;


//EJERCICIO_23
//Compound assignment with augmented multiplication
        let a = 5;
        let b = 12;
        let c = 4.6;

        a *= 5;
        b *= 3;
        c *= 10;


//EJERCICIO_24
//Compound assignment with augmented division
        let a = 48;
        let b = 108;
        let c = 33;

        a /= 12;
        b /= 4;
        c /= 11;

//EJERCICIO_25
//Escaping literal quotes in strings
        const myStr = "I am a \"double quoted\" string inside \"double quotes\".";


//EJERCICIO_26
//Quoting strings with single quotes
        const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


//EJERCICIO_27
//Escape sequences in strings
        const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';


//EJERCICIO_28
//Concatenating strings with plus operator
        const myStr = "This is the start." + " This is the end.";

//EJERCICIO_29
//Concatenating strings with the plus equals operator
        let myStr = "This is the first sentence."
        myStr+= " This is the second sentence.";


//EJERCICIO_30
//Constructing strings with variables
        const myName = "Gabriela";
        const myStr = "My name is" + myName + "and I am well!";


//EJERCICIO_31
//Appending variables to strings
        const someAdjective = "funny";
        let myStr = "Learning to code is ";
        myStr += someAdjective;


//EJERCICIO_32
//Find the length of a string
        let lastNameLength = 0;
        const lastName = "Lovelace";

        lastNameLength = lastName.length;


//EJERCICIO_33
//Use bracket notation to find the first character in a string

        let firstLetterOfLastName = "";
        const lastName = "Lovelace";

        firstLetterOfLastName = lastName[0];


//EJERCICIO_34
//Understand string immutability

        let myStr = "Jello World";

        myStr = "Hello World";


//EJERCICIO_35
//Use bracket notation to find the nth character in a string

        const lastName = "Lovelace";

        const thirdLetterOfLastName = lastName[2];


//EJERCICIO_36
//Use bracket notation to find the last character in a string

        const lastName = "Lovelace";

        const lastLetterOfLastName = lastName[lastName.length - 1];
//EJERCICIO_37
//Use-bracket-notation-to-find-the-nth-to-last-character-in-a-string

        const lastName = "Lovelace";

        const secondToLastLetterOfLastName = lastName[lastName.length - 2];


//EJERCICIO_38
//Word-blanks
        const myNoun = "dog";
        const myAdjective = "big";
        const myVerb = "ran";
        const myAdverb = "quickly";


        const wordBlanks = "The "+ myAdjective + " mans " + myNoun +","+ myVerb + " through the forest " + myAdverb;


//EJERCICIO_39
//Store-multiple-values-in-one-variable-using-javascript-arrays

        const myArray = ["peanut butter", 5];



//EJERCICIO_40
//Nest-one-array-within-another-array

        const myArray = [["peanut butter", 5],["Bulls", 23]];

//EJERCICIO_41
//Access-array-data-with-indexes
        const myArray = [50, 60, 70];
        const myData = myArray[0];
