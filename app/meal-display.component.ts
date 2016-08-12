import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="meal-div" mwGrow >
       <h3>{{meal.name}}</h3>
       <h6>Details:</h6>
        {{meal.details}}
       <h6>Calories:</h6>
        {{meal.calories}}
    </div>
  `
})
export class MealDisplayComponent {
  public meal: Meal;
  constructor(){}
}
