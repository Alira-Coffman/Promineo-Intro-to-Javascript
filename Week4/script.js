const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];


//write a function that creates an alert after two sec using alert();

//OPTION 1:
// setTimeout(()=> {
//     alert('I am an alert');
// }, 2000)

//option 2
setTimeout(alert, 2000, 'I am an alert')



//create a message("Hello World") that will show after 5 seconds
// setTimeout(function printMessage(){
//     console.log("Hello World");
// }, 5000)

// setTimeout(() => {
//     console.log("Hello World")
// }, 5000);

const myFunction = (name,day) => {
    console.log(`Hi my name is ${name}. Today is ${day}`)
}
setTimeout(myFunction, 3000, 'alira', 'Tuesday')
//callback
/**
 * opening a web page, reading from a dabase, etc etc
 * 
 */
// console.log("put food in the oven"); //
// setTimeout(function bake(){
//     console.log('Done Cooking."')
// }, 3000)
// console.log("Ready to eat!");





// //single para with an implicit/implied return
// let increaseByTwo = a => a+2;

// console.log(increaseByTwo(2))

// //implicit return, multiline NOTE TO SELF: REVIEW and RESEARCH and update

// let increaseByOne = (x, y) =>(
//     x,
//     y
//   );

// console.log(increaseByOne(1,5));


// /*Write a function that takes in two variables, n, m, and outputs
// “The sum of ‘n’ and ‘m’ is ‘n+m’;
// */
// //standard function 
// //void function
// function MnN(n,m)
// {
//     //use a template literal
//     console.log(`The sum of ${n} and ${m} is ${n + m}`)
// }
// MnN(2,3);

// //arrow function!!!
// let arrowMnN = (n,m) => {console.log(`The sum of ${n} and ${m} is ${n + m}`)};

// arrowMnN(4,4)

// //anon function
// let anonMnN = function(n,m)
// {
//     console.log(`The sum of ${n} and ${m} is ${n + m}`)
// }


// ///ARROW FUNCT (all equivelent)
// let c = 5;
// let b = 7;
// let sum1 = (a,b) => a + b; //arrow function
// console.log(sum1(c,b));
// // let sum = function(a,b){ //anon function
// //     return a+b
// // } 
// // function sum(a,b) //function declartion
// // {
// //     return a + b;
// // }


// function myFunction()
// {
//     {
//         var x =1; //function
//         let y = 2; //block!
//     }
    
//     //what would happen? console.log(x,y); 
   
// }
// myFunction();

// //TEMPLATE LITERALS
// var a = 6;
// //multiline support
// let myStr = `Hello
// how are you?
// I am well.`
// let x = 5;
// //usage of variables
// let secondString = 'This is the value of x: ' + x;
// let secondStringLiteral = `This is the value of x: ${x}`


// console.log(secondStringLiteral)



// //gives tommy, tim, and sally
// let test1 = names.slice(1,4)
// console.log(test1)

// //just tim & sally
// let test2 = names.slice(2,4)
// console.log(test2)

// /*Use a loop to iterate through the array and 
// calculate the average number of letters per name. 
// Print the result to the console.
// */
// let sum = 0;
// for(let i = 0; i < names.length; i++)
// {
    
//     sum += names[i].length;
//     //sum = sum + names[i].length
// }
// let average = sum/(names.length);
// console.log(average);


// /**
//  * Use a loop to iterate through the 
//  * array again and concatenate all the names together, 
//  * separated by spaces, and print the result to the console.
//  */

// let output = '';
// for(let i= 0; i < names.length; i++)
// {
//     output += names[i] + ' ';
//     //output = output + names[i] + ' '
// }
// console.log(output);