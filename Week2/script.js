// var light = 'yellow';


// //if light is red then print 'stop'
// // if(light === 'red')
// // { 
// //     console.log('stop');
    
// // }
// // else if(light === 'yellow')
// // {
// //     console.log('slow');
// // }
// // else if(light == 'green')
// // {
// //     console.log('go');
// // }
// // else
// // {
// //     console.log('your light is broken! maybe call for help')
// // }

// switch(light)
// {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('slow');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//     default:
//         console.log('your light is broken! maybe call for help')
//         break;
// }
// //


// /**
//  * 
//  * If the number is greater than zero, check if number is even or odd. 
//         If number is even, print even
//         If number is odd, print odd
// If number is less than zero, print negative
// If number is equal to zero, print neutral

//  */
// // (statement):(true) ? (false) -> turnery operation
// var x = 0;
// if(x > 0)
// {
//     //print "positive"
//     //check if x is even or odd
//     //odd
//     if(x % 2 === 1)
//     {
//         //odd
//         console.log('odd');
//     }
//     else
//     {
//         //even
//         console.log('even');
//     }
// }
// else if(x < 0)
// {
//     console.log('negative')
// }
// else
// {
//     console.log('neutral')
// }

// /**
//  * 
//  * If the number is greater than zero, print positive
//     If number is less than zero, print negative
//     If number is equal to zero, print neutral

//  */

// switch(true)
// {
//     case (x>0):
//         console.log('postive');
//         break;
//     case (x < 0):
//         console.log('negative');
//         break;
//     case (x == 0):
//         console.log('neutral');
//         break;
//     default:
//         console.log('something went wrong');
//         break;
// }

// //Print the correct day of the week

// var day = 'Tuesday'

// switch (day) {
//     case "Monday":
//         console.log('Today is the start of the week.')
//         break;
//     case "Tuesday":
//         console.log('Today is the not friday.')
//         break;
//     case "Wednesday":
//         console.log('Today is the middle of the week')
//         break;
//     default:
//         break;
// }

// //EXAMPLE
// x = 101
// for(let x = 0 ; x < 5; x++)
// {
//     console.log(x);
// }

// while(x < 5)
// {
//     console.log(x);
//     x++;
// }
// do
// {
//     console.log(x);
//     x++;
// }while(x <5)

// var userValue = prompt('What is your name?');
// console.log(userValue)

// alert('I am a text box');

/**
 * 
 * //ask user what their guess for number
//computer to get a random number (1 - 10)
//check if the number guess is correct
//prompt to play again.
 * 
 */
do
{
    var userGuess = prompt('Guess a number 1 - 10'); //prompt will always return a string

    //computer to get a random number (1 - 10)
    let MAX = 10;
    let MIN = 1;
    var computerValue = Math.floor(Math.random() * MAX + 1) + MIN ;
    console.log(computerValue);
    
    //check if the number guess is correct then print correct
    console.log(typeof(userGuess))
    console.log(typeof(computerValue))
    if(userGuess == computerValue)
    {
        console.log('correct');
        alert('correct');
    }
    else
    {
        alert('incorrect! ')
    }
    
    var playAgain = prompt('do you want to play again? y/n');
}while(playAgain === 'y')
//ask user what their guess for number
