import { bootstrapApplication } from '@angular/platform-browser';
import { CalculatorComponent } from './app/calculator/calculator.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(CalculatorComponent, {
  providers: [
    importProvidersFrom(FormsModule)
  ],
}).catch(err => console.error(err));
