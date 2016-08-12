import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <h1><i>Edit Component</i></h1>
    <input [(ngModel)]="meal.name">
  `
})
export class EditMealComponent {
  public meal: Meal;
}
