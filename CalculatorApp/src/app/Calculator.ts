/**
 * Adds two numbers together.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */

/**
 * Subtracts the second number from the first number.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The difference of the two numbers.
 */

/**
 * Multiplies two numbers together.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The product of the two numbers.
 */

/**
 * Divides the first number by the second number.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The quotient of the two numbers.
 * @throws Will throw an error if the second number is zero.
 */
export class Calculator {
    static add(a: number, b: number): number {
      return a + b;
    }
  
    static subtract(a: number, b: number): number {
      return a - b;
    }
  
    static multiply(a: number, b: number): number {
      return a * b;
    }
  
    static divide(a: number, b: number): number {
      if (b === 0) {

        throw new Error('Cannot divide by zero');

    }

    return a / b;

    }

    static power(base: number, exponent: number): number {
      return Math.pow(base, exponent);
    }

    static sqrt(value: number): number {
      if (value < 0) {
        throw new Error('Cannot calculate the square root of a negative number');
      }
      return Math.sqrt(value);
    }

    static log(value: number): number {
      if (value <= 0) {
        throw new Error('Cannot calculate the logarithm of a non-positive number');
      }
      return Math.log(value);
    }

    static exp(value: number): number {
      return Math.exp(value);
    }

    static sin(value: number): number {
      return Math.sin(value);
    }

    static cos(value: number): number {
      return Math.cos(value);
    }

    static tan(value: number): number {
      return Math.tan(value);
    }

    static asin(value: number): number {
      return Math.asin(value);
    }

    static acos(value: number): number {
      return Math.acos(value);
    }

    static atan(value: number): number {
      return Math.atan(value);
    }

    static areaOfCircle(radius: number): number {
      if (radius < 0) {
      throw new Error('Radius cannot be negative');
      }
      return Math.PI * Math.pow(radius, 2);
    }

    static areaOfRectangle(length: number, width: number): number {
      if (length < 0 || width < 0) {
      throw new Error('Length and width cannot be negative');
      }
      return length * width;
    }

    static areaOfTriangle(base: number, height: number): number {
      if (base < 0 || height < 0) {
      throw new Error('Base and height cannot be negative');
      }
      return 0.5 * base * height;
    }

    static areaOfSquare(side: number): number {
      if (side < 0) {
      throw new Error('Side cannot be negative');
      }
      return Math.pow(side, 2);
    }
  }