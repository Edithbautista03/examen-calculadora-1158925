import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

 currentNumber = '0';
 firstOperand:any|null = null;
 operator:any|null = null;
 waitForSecondNumber = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
