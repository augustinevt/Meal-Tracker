import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="edit-div">
    <h1><i>Edit</i></h1>
    <input placeholder="Name" [(ngModel)]="meal.name"><br>
   <input placeholder="Details" [(ngModel)]="meal.details"><br>
   <input placeholder="Calories" [(ngModel)]="meal.calories"><br>
  </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
