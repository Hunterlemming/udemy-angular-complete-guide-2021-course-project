import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://fandomeducationinnovation.files.wordpress.com/2019/02/food-wars-saumon-confit-flamme.png'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://fandomeducationinnovation.files.wordpress.com/2019/02/food-wars-saumon-confit-flamme.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

}
