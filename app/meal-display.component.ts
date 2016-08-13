import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="meal-div" mwGrow >
       <h2>{{meal.name}}</h2>
    </div>
  `
})
export class MealDisplayComponent {
  public meal: Meal;
  constructor(){}
}
