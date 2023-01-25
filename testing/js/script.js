//function that will calculate the sum between three values
function sum(a,b,c)
{
    return a+b+c;
}
//let sum = (a,b,c) => a+b+c;
// function doSomething(x,y) {
//   if (typeof x !== "string") throw new Error("x must be a string");
//   return x + y;
// }


//Temperature CLASS
class Temperature
{
    constructor(temp)
    {
        if(temp > -459.67 && temp)
            this.temp = temp; //stores fahrenheit temp
        else
        {
            this.temp = "invalid temp";
            //throw error here
            //alert('Error');
            new Error('value is too low');
            return null
        }
    }
    getTemp()
    {
        return this.temp;
    }
    toCelsius()
    {
        return (this.temp -32) * (5/9)
    }
    toKelvin()
    {
        return this.toCelsius() + 273.15;
    }
} 

let temp = new Temperature(30);

console.log(temp.toCelsius())
//

/**
 * 
 * 
 * 
 * 
 * 
 */