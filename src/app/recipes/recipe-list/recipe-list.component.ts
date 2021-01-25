import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://fandomeducationinnovation.files.wordpress.com/2019/02/food-wars-saumon-confit-flamme.png'),
    new Recipe('Test Recipe', 'This is a test', 'https://fandomeducationinnovation.files.wordpress.com/2019/02/food-wars-saumon-confit-flamme.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
