import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  directives: [MealDisplayComponent, NewMealComponent],
  template: `
    <h1>FooFoo</h1>
    <h1>meal-list</h1>
    <meal-display
      *ngFor="#currentMeal of meals"
      [meal]="currentMeal">
    </meal-display>
     <new-meal (newMeal)="createMeal($event)" ></new-meal>
  `
})
export class MealListComponent {
  public meals: Meal[];
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
}
