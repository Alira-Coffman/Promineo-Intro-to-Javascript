//assert library
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
describe("test of summation function", function(){
    it('should return correct sum', function(){
        //test implementation
        var a = 1, b = 2, c = 3;

        assert.strictEqual(sum(a,b,c), 6, 'not equal');
    })
})

describe("Testing Temp Class", function(){
    
    //test negative value or positive value.
    it('accepts a valid negative value', function(){
        let temp = new Temperature(-10);
        assert.strictEqual(temp.getTemp(), -10, 'not set correctly')
    });
     //min value check. Error out -459.67
    it('should throw an error if out of bounds', function(){
    //   var badFn = function () { throw new TypeError('Illegal salmon!'); };

    //     expect(badFn).to.throw('salmon');
    let temp = new Temperature(-500);
    assert.strictEqual(temp.getTemp(), 'invalid temp', "Invalid")

    })
    //test if its invalid(i.e not a number)
    it("Invalid Input", function(){
        //"a" , "*$"

        let temp = new Temperature("abc");
        assert.strictEqual(temp.getTemp(), 'invalid temp', "Invalid")
    })
    //test to make sure null fails
    it('NULL CHECK', function(){
        let temp = new Temperature(null)
        assert.strictEqual(temp.getTemp(), 'invalid temp', "Invalid");

    })
    //toCelcius
    it("Celsius", function(){
        let temp = new Temperature(32);
        assert.strictEqual(temp.toCelsius(), 0, 'not valid');
    })
    //toKelvin
    it("Kelvin", function(){
        let temp = new Temperature(32);
        assert.strictEqual(temp.toKelvin(), 273.15, 'not valid');
    })
})

