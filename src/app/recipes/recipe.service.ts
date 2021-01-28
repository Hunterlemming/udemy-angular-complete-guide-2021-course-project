import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://fandomeducationinnovation.files.wordpress.com/2019/02/food-wars-saumon-confit-flamme.png'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://fandomeducationinnovation.files.wordpress.com/2019/02/food-wars-saumon-confit-flamme.png')
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
