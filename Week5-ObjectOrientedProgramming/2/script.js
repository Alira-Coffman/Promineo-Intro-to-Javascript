//assignment brainstorm
//objects involved  in card game of war
// - card
   //     - face vs number ?? coming back
   //Suits clovers, spades, hearts, diamonds
   // value  Aces - 14 King - 13, Queen - 12, Jack 11
   //card name : 1,2,3,4...king,queen,jack
//Deck
    // array of 52 cards
    //shuffle
    //deal
//Game?
    //startGame
    //shuffle?
    //deal
// - Players
            // for assignment 2 players
    //points
    //Hand -26 cards to start
// - Time?? 
//  

//set up game to start automaically
// 1. set players, shuffle, deal cards, start 26 rounds, give points, end the game
// alert(), console.log the game outcome.

//INHERITANCE


class Shape{
    toString(){
        return `${this.getType()} area-${this.getArea()}`;
    }
    getArea(){
        return 0;
    }
    getType()
    {
        return "Shape";
    }
}
class Rectangle extends Shape
{
    constructor(h,w)
    {
        super();//calls the parent constructor
        this.height = h;
        this.width = w;
    }
    getArea(){
        return this.height * this.width;
    }
    getType()
    {
        return "Rectangle";
    }
}

class Square extends Rectangle
{
    constructor(size)
    {
        super(size, size);
    }
    getType()
    {
        return "Square";
    }
}

class Triangle extends Shape{
    constructor(height, base)
    {
        super();//calls to shape(parent)
        this.height = height;
        this.base = base;
    }
    getArea(){
        return 0.5 * this.height * this.base;
    }
    getType()
    {
        return "Triangle";
    }
}

// let myRectangle = new Rectangle(3,5);
// console.log(myRectangle.toString());

// let mySquare = new Square(3);
// console.log(mySquare.toString())

// let myTriangle = new Triangle(3,5);
// console.log(myTriangle.toString())

let shapes = [new Rectangle(3,5), new Square(3), new Triangle(3,5)];
for(let shape of shapes)
{
    console.log(shape.toString())
}


//CIRCLE CLASS
class Circle {
    static get PI() {return Math.PI}
    constructor(r)
    {
        this.radius = r;
        console.log(this.radius)
    }
    getArea() {
        return Circle.PI * this.radius * this.radius;
    }
    //circumference 2 pi r
    getCircumference() {
        return Circle.PI * 2 * this.radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
}

//create an instance

let Circle1 = new Circle(3);
console.log(Circle1.getArea());
console.log(Circle1.radius);






//inheritance vs composition
// is a relationship
//composition has a relationship




//QUIZZZ # 7

const customers =[
{
    name:'Sam',
    address:{
        street: '1234 W Bell Rd',
        city: 'Phoenix',
        zip: '85308',
        state: 'AZ'
    },
    membershipLevel:'GOLD',
    age: 32
},
{
    name:'cors',
    address:{
        street: '1234 W Bell Rd',
        city: 'Las Vegas',
        zip: '85308',
        state: 'NV'
    },
    membershipLevel:'GOLD',
    age: 32
},
{
    name:'Cody',
    address:{
        street: undefined,
        city: 'Phoenix',
        zip: '85308',
        state: 'AZ'
    },
    membershipLevel:'SILVER',
    age: 32
}]
//how do we access what city customer 0 is?
console.log(customers[0].address.city)


const matchingCustomers = (custArray) => {
    let resultArray=[]; //hold our filtered results.

    for (let customer of custArray)
    {
        //find names iwth matching C for first letter
        if((customer.name.charAt(0)).toUpperCase() === 'C' ||
            //address contains no undefined fields.
            (((customer.address.street) !== undefined) 
            && ((customer.address.city) !== undefined) 
            && ((customer.address.state) !== undefined) 
            && ((customer.address.zip) !== undefined) )
            ||
            //city is peoria and the state is AZ
           (((customer.address.city) === 'Peoria') 
            && ((customer.address.state) === 'AZ')) 
            ||
            (((customer.membershipLevel) === 'GOLD') || 
            ((customer.membershipLevel) === 'PLATINUM') 
            || (((customer.membershipLevel) === 'SILVER')) && ((customer.age) < 29 )) )
            {
                console.log(customer)
                resultArray.push(customer)
            }
            else
                console.log(`${customer.name} does not meet critera`)
    }
   return resultArray
}


console.log(matchingCustomers(customers));

///REVIEW!!
// {
//     let x = 5; //scope: block , 
//     var y = 6; //scope: function , 
//     console.log(x,y);
// }
// //What will happen??
// //console.log(x,y); //error is x does not exist.

// const v = 10;
// //v = 9; //this is not allowed!!

// //What will happen??
// console.log(v);

// console.log(`Hello! Our constant variable is ${v}`); //template literal


// //SetTimeOut to print hello after 5 seconds
// setTimeout(function printMessage(){
//     console.log('Hello World');
// }, 5000)
// //Why 5000?  because its in ms