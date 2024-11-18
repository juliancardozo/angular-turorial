import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  a: number = 0;
  b: number = 0;
  operation: string = '';
  
  result: number | null = null;

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = this.a + this.b;
        break;
      case '-':
        this.result = this.a - this.b;
        break;
      case '*':
        this.result = this.a * this.b;
        break;
      case '/':
        this.result = this.b !== 0 ? this.a / this.b : null;
        break;
    }
  }
}
