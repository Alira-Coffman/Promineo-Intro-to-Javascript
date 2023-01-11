//how do I define a variable named test
var test;
test = 0;

console.log(test);

//iterate from 1 to 10 and print out 
//every even number
//?what type of loop
//?how to print evens

for(let i = 1; i < 10; i++)
{
    if(i % 2 === 0)
        console.log(i);
}




/**ARRAYS */

let numbers = [5, 15, "20"];

//first aval number (5)
console.log(numbers[0])

console.log(numbers.length);
//last value
console.log(numbers[numbers.length-1]);

numbers[1] = 10;
//.push first array method.
numbers.push(15);
console.log(numbers)


let two_d_array = [
    [5,10,20],
    ["hello", "a", "b"],
    ["this", "is", "a"]
]

console.log(two_d_array[1][0])

/***
 * [5][10][20]
 * ["hello"]["a"]["b"]
 * ["this"]["is"]["a"]
 */


//how do we print an array.

numbers = [5, 15, 10];
let test1 = ["hello", "hi", "c", "d"]
//What type of loop? we know the length of the array.
for(let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}

/**
 * @param arr: array that we print
 * @description: This prints an array
 */
function printArray(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}

//print out array with a map method
console.log("MAP EXAMPLE")
numbers.map(function(item){
    console.log(item);
});
console.log("MAP EXAMPLE")
//function call
printArray([5,7,15,20]);
printArray(test1);


//create a function that multiplies two numbers a, b
function getValue()
{
    return 5;
}
function multiply(a,b)
{
    return a *b;
}

//function call for multiply
console.log(multiply(2,getValue()));

let product = multiply(10, 5);
console.log(product);



//check if a value is even!
function checkEven(a)
{
    if(a % 2 == 0)
        return true;
    else
        return false;
}


//function calls for checkEven
for(let i = 0; i <=10; i++)
{
    if(checkEven(i))
        console.log(i);
}

//convert fahrenheit to celsius
/**
 * (°F − 32) × 5/9
 * 
 */
function convertToCelsius(f)
{
    return (f - 32) * (5/9);
}

console.log(convertToCelsius(70));


//MAP
//make a new array that squares all values of previous array
//[1,2,3] = [1,4,9]

let numbers1=[1,2,3];

let numbersSquared = numbers1.map(function(item){
    return item*item;
})

// let numbersSquared2 = numbers1.map((item) => item*item)
console.log(numbersSquared);

/// take the array numbers1, add three to each value using map.
let numbersAdditon = numbers1.map(function(item){
    return item + 3;
})
console.log(numbersAdditon);



//TROUBLE SHOOTING EXAMPLE

let numbers3 = [1,2,3]; 
function squareArray (arr){
    return arr.map(function(item)
    {
        return item*item;
    })
}
console.log(squareArray(numbers3))


//Reduce
let fruits = ["apple", "orange", "banana", "orange"];

let bowl = fruits.reduce(function(previous, current){
    console.log("previous ", previous);
    console.log("current ", current);
    return(previous +' ' + current);
})

let oranges = fruits.filter(function(item)
{
    return item === "orange";
})

console.log("oranges ", oranges)

//get sum of entire array
let sum = numbers1.reduce(function(p, c)
{
    return(p+c);
})

console.log(sum)


function eat(fruit) {
    console.log("Eating " + fruit + "... YUM!");
  }
  
  
  
  let test5 = fruits.forEach(function(fruit, index ) {
    console.log(index, " Eating " + fruit + "... YUM!");
  });
  

  console.log(fruits)
  //add
  fruits.splice(2, 0, "Lemon", "Kiwi");

  console.log(fruits);

  //remove
  fruits.splice(2,2)

  console.log(fruits);


let car ={
    make: "GMC",
    model: "Safari",
    year: "2002",
    printCarType: function(){
        console.log(car.make, car.model, car.year)
    }
}
car.printCarType();


let name = "alira";
console.log(name.length);