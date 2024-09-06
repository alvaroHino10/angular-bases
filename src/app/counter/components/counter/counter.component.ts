import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increment(+1)">Increment</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increment(-1)">Decrement</button>`
})

export class CounterComponent {
  constructor() { }
  public counter = 10;

  increment(value: number): void {
    this.counter = this.counter + value;
  }

  reset(): void {
    this.counter = 10;
  }
}
