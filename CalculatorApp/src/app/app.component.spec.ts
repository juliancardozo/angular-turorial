import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'CalculatorApp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CalculatorApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, CalculatorApp');
  });

  it('should perform addition', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getNumber('1');
    app.getOperation('+');
    app.getNumber('2');
    app.getOperation('=');
    expect(app.currentNumber).toEqual('3');
  });

  it('should perform subtraction', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getNumber('5');
    app.getOperation('-');
    app.getNumber('3');
    app.getOperation('=');
    expect(app.currentNumber).toEqual('2');
  });

  it('should perform multiplication', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getNumber('4');
    app.getOperation('*');
    app.getNumber('2');
    app.getOperation('=');
    expect(app.currentNumber).toEqual('8');
  });

  it('should perform division', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getNumber('8');
    app.getOperation('/');
    app.getNumber('2');
    app.getOperation('=');
    expect(app.currentNumber).toEqual('4');
  });
});
