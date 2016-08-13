import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'meal-list',
  directives: [MealDisplayComponent, NewMealComponent, MealDetailsComponent],
  pipes: [FilterPipe],
  template: `


  <div class="container">
    <div class="row">
      <div class="col-sm-12 temp-height">
        <h1>MEAL TRACKER</h1>
      </div>
      <div class="col-sm-12 new-list">
        <new-meal (newMeal)="createMeal($event)" ></new-meal>
      </div>
    </div>
    <div class="row height-control">
      <div class="col-sm-4 height-control meal-list">
        <select (change)="selectFilter($event.target.value)">
          <option value="all">all</option>
          <option value="low">low</option>
          <option value="mid">moderate</option>
          <option value="high">high</option>
        </select>
        <meal-display
          *ngFor="#currentMeal of meals | filter:filter"
          [meal]="currentMeal"
          (click)="clickedMeal(currentMeal)"
          [class.selected]="selectedMeal === currentMeal">
        </meal-display>
      </div>
      <div class="col-sm-8 height-control detail-list">
        <meal-details
          *ngIf="selectedMeal"
          [meal]="selectedMeal">
        </meal-details>
      </div>
    </div>
  </div>

  `
})
export class MealListComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  public filter: string = 'all';
  constructor(){
    this.meals = [
      new Meal('Burger', 'I ate it with relish', 200),
      new Meal('Milk Shake', 'Shake it, shake it baby', 1233),
      new Meal('Blubber', 'Found on beach', 700),
      new Meal('Corpulent Carp', 'Complements of the jp garden', 501)
    ];
    this.selectedMeal = this.meals[0];
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
