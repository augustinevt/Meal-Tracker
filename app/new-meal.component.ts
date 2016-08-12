import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMeal'],
  template: `
    <div class="container new-div ">
      <h3>New Meal</h3>
      <input placeholder='name' #userName><br>
      <input placeholder='calories' #userCalories><br>
      <textarea placeholder='details' #userDetails></textarea><br>
      <button class="btn-default" (click)="onSubmit(userName, userDetails, userCalories)" >Add</button>
    </div>
  `
})
export class NewMealComponent {
  public meal: Meal;
  public newMeal: EventEmitter<string[]>;
  constructor(){
    this.newMeal = new EventEmitter();
  }
  onSubmit(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement,){
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
