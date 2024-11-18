import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component'; // Import CalculatorComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CalculatorComponent], // Include CalculatorComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CalculatorApp';
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  public getNumber(v: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? (this.currentNumber = v) : (this.currentNumber += v);
    }
  }

  public getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: string, secondOp: number) {
    switch (op) {
      case '+':
        return this.firstOperand! + secondOp;
      case '-':
        return this.firstOperand! - secondOp;
      case '*':
        return this.firstOperand! * secondOp;
      case '/':
        if (secondOp === 0) {
          throw new Error('Cannot divide by zero');
        }
        return this.firstOperand! / secondOp;
      case '=':
        return secondOp;
      default:
        return 0;
    }
  }

  public getOperation(op: string) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
