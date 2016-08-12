import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'meal-list',
  directives: [MealDisplayComponent, NewMealComponent, EditMealComponent],
  pipes: [FilterPipe],
  template: `
  <new-meal (newMeal)="createMeal($event)" ></new-meal>
  <div class="jumbotron container">
    <h1>Today's Meals</h1>
    Filter by Calories <select (change)="selectFilter($event.target.value)">
      <option value="all">all</option>
      <option value="low">low</option>
      <option value="mid">moderate</option>
      <option value="high">high</option>
    </select>
    <div class="row">
      <meal-display
      class="col-sm-4"
      *ngFor="#currentMeal of meals | filter:filter"
      [meal]="currentMeal"
      (click)="clickedMeal(currentMeal)"
      [class.selected]="selectedMeal === currentMeal">
      </meal-display>
    </div>
     <edit-meal
      *ngIf="selectedMeal"
      [meal]="selectedMeal">
     </edit-meal>
    </div>
  `
})
export class MealListComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  public filter: string = 'all';
  constructor(){
    this.meals = [
      new Meal('Burger', 'Im so fancy', 1233),
      new Meal('Fat Shake', 'Im so fancy', 1233),
      new Meal('Blubber', 'Im so fancy', 1233),
      new Meal('Corpulent Carp', 'Im so fancy', 1233)
    ];
    console.log(this.meals)
  }
  createMeal(arg: string[]){
    console.log("createMeal triggered");
    this.meals.push(new Meal(arg[0], arg[1], parseFloat(arg[2])));
    console.log(this.meals);
  }
  clickedMeal(meal: Meal){
    console.log(this.selectedMeal);
    this.selectedMeal = meal;
    console.log(this.selectedMeal);
  }
  selectFilter(filter: string){
    this.filter = filter;
    console.log(this.filter);
  }
}
