import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
  <div class="row details">
    <div class="detail-div col-sm-7">
      <h3>Name: {{meal.name}}</h3>
      <h3>Calories: {{meal.calories}}</h3>
      <h3>Details: {{meal.details}}</h3>
    </div>
    <div class="edit-div  col-sm-5">
      <h6>Edit</h6>
      <input placeholder="Name" [(ngModel)]="meal.name"><br>
      <input placeholder="Details" [(ngModel)]="meal.details"><br>
      <input placeholder="Calories" [(ngModel)]="meal.calories"><br>
    </div>
  </div>
  `
})
export class MealDetailsComponent {
  public meal: Meal;
}
