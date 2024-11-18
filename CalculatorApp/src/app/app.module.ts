import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module'; // <-- Import AppRoutingModule
import { HomeComponent } from './home/home.component'; // <-- Import HomeComponent
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    HomeComponent, // <-- Declare HomeComponent
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports array
    AppRoutingModule // <-- Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
