import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMeal'],
  template: `

    <div class="new-div">
      <div class="row">
        <div class="col-sm-3">
            <label>name</label>
            <input #userName><br>
        </div>
        <div class="col-sm-3">
          <label>Calories</label>
          <input #userCalories><br>
        </div>
        <div class="col-sm-3">
            <label>Details</label>
            <textarea #userDetails></textarea>
        </div>
          <button (click)="onSubmit(userName, userDetails, userCalories)" >Add</button>
      </div>
    </div>
  `
})
export class NewMealComponent {
  public meal: Meal;
  public newMeal: EventEmitter<string[]>;
  constructor(){
    this.newMeal = new EventEmitter();
  }
  onSubmit(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement){
    this.newMeal.emit([
      name.value,
      details.value,
      calories.value
    ]);
    name.value = '';
    details.value = '';
    calories.value = '';
    console.log('event emitted');
  }
}
