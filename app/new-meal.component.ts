import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMeal'],
  template: `
    <h3>Form</h3>
    <input placeholder='name' #userName>
    <input placeholder='details' #userDetails>
    <input placeholder='calories' #userCalories>
    <button (click)="onSubmit(userName, userDetails, userCalories)" ></button>
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
