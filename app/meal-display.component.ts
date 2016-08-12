import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h2>  Meal: {{meal.name}} || {{meal.details}} || {{meal.calories}} </h2>
  `
})
export class MealDisplayComponent {
  public meal: Meal;
  constructor(){
    console.log("arf")
  }

}
