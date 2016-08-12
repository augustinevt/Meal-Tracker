import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(meals: Meal[], args ){
    var filterParam = args[0];

    if(filterParam === 'all'){return meals}

    else if(filterParam === 'low'){
      return meals.filter((meal)=>{1
        return meal.calories < 500;
      })
    }

    else if(filterParam === 'mid'){
      return meals.filter((meal)=>{
        return meal.calories > 500 && meal.calories < 1000;
      })
    }

    else if(filterParam === 'high'){
      return meals.filter((meal)=>{
        return meal.calories > 1000;
      })
    }

  }

}
