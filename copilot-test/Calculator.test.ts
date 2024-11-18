import { Calculator } from './Calculator';

describe('Calculator', () => {
    it('should add two numbers correctly', () => {
        expect(Calculator.add(1, 2)).toBe(3);
        expect(Calculator.add(-1, -1)).toBe(-2);
        expect(Calculator.add(0, 0)).toBe(0);
    });

    it('should subtract two numbers correctly', () => {
        expect(Calculator.subtract(5, 3)).toBe(2);
        expect(Calculator.subtract(0, 0)).toBe(0);
        expect(Calculator.subtract(-1, -1)).toBe(0);
    });

    it('should multiply two numbers correctly', () => {
        expect(Calculator.multiply(2, 3)).toBe(6);
        expect(Calculator.multiply(-2, -3)).toBe(6);
        expect(Calculator.multiply(0, 5)).toBe(0);
    });

    it('should divide two numbers correctly', () => {
        expect(Calculator.divide(6, 3)).toBe(2);
        expect(Calculator.divide(-6, -3)).toBe(2);
        expect(Calculator.divide(0, 1)).toBe(0);
    });

    //add divide to zero error test
    it('should throw an error when dividing by zero', () => {
        expect(() => Calculator.divide(1, 0)).toThrow('Cannot divide by zero');
    });

    it('should calculate the power of a number correctly', () => {
        expect(Calculator.power(2, 3)).toBe(8);
        expect(Calculator.power(5, 0)).toBe(1);
        expect(Calculator.power(2, -2)).toBe(0.25);
    });

    it('should calculate the square root of a number correctly', () => {
        expect(Calculator.sqrt(4)).toBe(2);
        expect(Calculator.sqrt(0)).toBe(0);
        expect(() => Calculator.sqrt(-1)).toThrow('Cannot calculate the square root of a negative number');
    });

    it('should calculate the logarithm of a number correctly', () => {
        expect(Calculator.log(1)).toBe(0);
        expect(Calculator.log(Math.E)).toBe(1);
        expect(() => Calculator.log(0)).toThrow('Cannot calculate the logarithm of a non-positive number');
    });

    it('should calculate the exponential of a number correctly', () => {
        expect(Calculator.exp(1)).toBe(Math.E);
        expect(Calculator.exp(0)).toBe(1);
    });

    it('should calculate the sine of a number correctly', () => {
        expect(Calculator.sin(0)).toBe(0);
        expect(Calculator.sin(Math.PI / 2)).toBe(1);
    });

    it('should calculate the cosine of a number correctly', () => {
        expect(Calculator.cos(0)).toBe(1);
        expect(Calculator.cos(Math.PI)).toBe(-1);
    });

    it('should calculate the tangent of a number correctly', () => {
        expect(Calculator.tan(0)).toBe(0);
        expect(parseFloat((Calculator.tan(Math.PI / 4).toPrecision(1)))).toBe(1);
    });

    it('should calculate the arcsine of a number correctly', () => {
        expect(Calculator.asin(0)).toBe(0);
        expect(Calculator.asin(1)).toBe(Math.PI / 2);
    });

    it('should calculate the arccosine of a number correctly', () => {
        expect(Calculator.acos(1)).toBe(0);
        expect(Calculator.acos(0)).toBe(Math.PI / 2);
    });

    it('should calculate the arctangent of a number correctly', () => {
        expect(Calculator.atan(0)).toBe(0);
        expect(Calculator.atan(1)).toBe(Math.PI / 4);
    });

    it('should calculate the area of a circle correctly', () => {
        expect(Calculator.areaOfCircle(1)).toBeCloseTo(Math.PI);
        expect(Calculator.areaOfCircle(0)).toBe(0);
        expect(() => Calculator.areaOfCircle(-1)).toThrow('Radius cannot be negative');
    });

    it('should calculate the area of a rectangle correctly', () => {
        expect(Calculator.areaOfRectangle(2, 3)).toBe(6);
        expect(Calculator.areaOfRectangle(0, 5)).toBe(0);
        expect(() => Calculator.areaOfRectangle(-2, 3)).toThrow('Length and width cannot be negative');
    });

    it('should calculate the area of a triangle correctly', () => {
        expect(Calculator.areaOfTriangle(2, 3)).toBe(3);
        expect(Calculator.areaOfTriangle(0, 5)).toBe(0);
        expect(() => Calculator.areaOfTriangle(-2, 3)).toThrow('Base and height cannot be negative');
    });

    it('should calculate the area of a square correctly', () => {
        expect(Calculator.areaOfSquare(2)).toBe(4);
        expect(Calculator.areaOfSquare(0)).toBe(0);
        expect(() => Calculator.areaOfSquare(-2)).toThrow('Side cannot be negative');
    });

});