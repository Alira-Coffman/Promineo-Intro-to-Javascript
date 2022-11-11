var assert = chai.assert;

describe('CalculateSum', function(){
    it('should calculate the sum of two numbers', function()
    {
        //TEST IMPLEMENTATION GOES
        let a = 2, b = 3;

        assert.strictEqual(calculateSum(a,b), 5, 'something went wrong');
        //===

    });
}
);